module.exports = (grunt) ->
  r = __dirname + "/"
  lib = r + 'lib/itchcork/'
  #vendor root
  v = r + 'vendor/'
  views = r + 'app/views/'
  ex = r + 'examples/'
  context = ex + 'context/'
  tests = ex + 'test/itchcork/'
  mocha = ex + 'test/mocha/'
  test = ex + 'test/'
  coverage = r + 'coverage/'
  cp = require('child_process')
  testServerPort = '4000'
  testServerWebSocketPort = 4001

   # Load external tasks
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.loadNpmTasks 'grunt-yui-compressor'
  grunt.loadNpmTasks 'grunt-istanbul'

  # Make task shortcuts
  grunt.registerTask 'default', ['concat','min','instrument']

  # Configure Grunt
  grunt.initConfig
    jshint:
      files: [r + '*.js']
    concat:
      ic:
        src: lib + '*.js'
        dest: r + 'itchcork.js'
      allContext:
        src: context + '*.js'
        dest: ex + 'all-context.js'
      allItchcorkTests:
        src: tests + '*.js'
        dest: test + 'all-itchcork.js'
      allMochaTests:
        src: mocha + '*.js'
        dest: test + 'all-mocha.js'
    'min':
      'ic':
        'src': ['itchcork.js']
        'dest': 'itchcork.min.js'
    instrument :
      files : ex + 'all-context.js'
      options :
        basePath : ex + 'instrumented/all-context.js'
        flatten: true
    # watch:
    #   gruntfile:
    #     files: ['gruntfile.coffee', r + 'main.js']
    #     tasks: ['default']
    #     options: nocase: true

    #   test:
    #     files: [app + '**/*', lib + '**/*']
    #     tasks: ['instrument', 'test', 'default']

    #   css:
    #     files: [less + '**/*.less']
    #     tasks: ['css']

    #   cover:
    #     files: [coverage + 'coverage.json']
    #     tasks: ['makeReport']

    # makeReport:
    #   src: coverage + 'coverage.json'
    #   options:
    #     type: 'lcov'
    #     dir: coverage
    # instrument:
    #   files: app + '*.js'
    #   options:
    #     basePath: js + 'app-cov/'
    #     flatten: true

  testServer = undefined

  #  grunt.event.on "watch", (action, filepath) ->
  #    grunt.log.writeln filepath + " has " + action

  grunt.registerTask 'startUnitTestServer', ->
    alreadyOn = false
    callback = (result) ->
      alreadyOn = result
      unless alreadyOn
        startServer(done)
      else
        console.log 'no need to start JS Unit Test Server'
        done()
    testSocket testServerPort, this.async, callback
    done = this.async()

    startServer = (done) ->
      spawn = cp.spawn
      testServer = spawn('node', [js + 'app.js'])
      testServer.stdout.pipe process.stdout
      testServer.stderr.pipe process.stderr
      testServer.on 'exit', (code) ->
        console.log 'server killed'
        done()

  grunt.registerTask 'kill', ->
    exec = cp.exec
    nodekill = exec('taskkill /IM node.exe /F', {}, () -> done())
    nodekill.stdout.pipe process.stdout
    nodekill.stderr.pipe process.stderr
    grunt.log.write 'Waiting...'
    done = this.async()

  grunt.registerTask 'compileSpecs', ->
    exec = cp.exec
    script = spec + 'coffee.cmd'
    console.log script
    coffee = exec(script, null, () -> done())
    coffee.stdout.pipe process.stdout
    coffee.stderr.pipe process.stderr
    done = this.async()

  grunt.registerTask 'mocha', ->
    exec = cp.exec
    mochaScript = __dirname + '\\node_modules\\.bin\\mocha-phantomjs.cmd http://localhost:4000 --reporter spec'
    mocha = exec(mochaScript, null, () -> done())
    mocha.stdout.pipe process.stdout
    mocha.stderr.pipe process.stderr
    done = this.async()

  grunt.registerTask 'runTests', ->
    exec = cp.exec
    phantomRunner = __dirname + '\\phantomRunner.cmd'
    phantomTestRunner = exec(phantomRunner, null, () -> done())
    phantomTestRunner.stdout.pipe process.stdout
    phantomTestRunner.stderr.pipe process.stderr
    done = this.async()

  grunt.registerTask 'openCoverageReport', ->
    pageAlreadyOpen = false
    callback = (result) ->
      pageAlreadyOpen = result
      console.log pageAlreadyOpen
      unless pageAlreadyOpen
        openCoveragePage(done)
      else
        # console.log('Coverage Report Already Open')
    testWebSocket testServerWebSocketPort, this.async, callback
    done = this.async()

    openCoveragePage = (doneCallback) ->
      spawn = require('child_process').spawn
      url_to_open = 'http://localhost:' + testServerPort + '/coverage'
      chrome = spawn process.env[(if (process.platform is 'win32') then 'USERPROFILE' else 'HOME')] + '\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe', ['--new-tab', url_to_open]
      doneCallback()

  testSocket = (port, async, result) ->
    net = require('net')
    sock = new net.Socket()
    sock.setTimeout 1500
    sock.on('connect',
      () ->
        result true
        done()
    ).on('error',
      (e) ->
        sock.destroy()
        result(false)
        done()
    ).on('timeout',
      (e) ->
        console.log 'ping timeout'
        result(false)
        done()
    ).connect port, '127.0.0.1'
    grunt.log.write 'Waiting...'
    done = async

  testWebSocket = (port, async, result) ->
    WS = require('ws').Server
    wss = new WS({ port: port, verifyClient: true })

    Emitter = require('events').EventEmitter
    emitter = new Emitter

    wss.on 'connection', (ws) ->
      ws.send JSON.stringify(r: Date.now().toString()), (error) ->
        unless error
          result true
          wss.close()
          done()
        else
          console.log e
          result false
          wss.close()
          done()

    checkTimeout = () -> if wss._server && wss._server.connections == 0
      result false
      wss.close()
      done()
    setTimeout checkTimeout, 500
    grunt.log.write 'Waiting...'
    done = async