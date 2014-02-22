module.exports = (grunt) ->
  fs = require('fs')
  root = __dirname
  test = root + '/'
  specs = test + 'specs/'
  benchmarks = test + 'benchmarks/'
  testServer = test
  testServerJs = testServer + 'js/'
  coverage = testServer + 'coverage/'
  cp = require('child_process')
  config = require('./configs/config.coffee')
  testServerPath = testServer + 'unitTestServer.js'
  testServerPort = 4000
  testServerUrl = 'localhost:' + testServerPort
  testServerWebSocketPort = 1337


  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-istanbul'
  grunt.loadNpmTasks 'grunt-parallel'
  grunt.loadNpmTasks 'grunt-contrib-copy'

  # Make task shortcuts
  grunt.registerTask 'default', ['parallel:dev']
  grunt.registerTask 'vendor', ['concat:vendor', 'min:vendor']
  grunt.registerTask 'build', ['less:dist','jade','requirejs','concat:build','min:build']
  grunt.registerTask 'test', ['clean','copy:src','compileCoffee','copy:instrumented','concat:testVendors','instrument','copy:specs_libs','copy:specs','copy:benchmarks','compileCoffee','startUnitTestServer','openTest']
  grunt.registerTask 'testWatch', ['copy:src']

  # Configure Grunt
  grunt.initConfig
    clean:
      _src: ['_src']
      source: ['source']
      instrumented: ['_instrumented']
      coverage: ['coverage.json']
    copy:
      src:
         files: [
           {expand: true, cwd: config.jsUnderTestPath, flatten: false, src: ['**','!**/main.coffee', '!specs/**/**'], dest: '_src'}
         ]
      instrumented:
        files: [{expand: true, cwd: '_src', flatten: false, src: ['**','!*.js','!**/*.coffee', '!lib/**', '!specs/**'], dest: 'source'}]
      specs_libs:
        files: [
          {expand: true,  flatten: false, src: ['lib/**/*'], dest: '_src'},
          {expand: true,  flatten: false, src: ['lib/**/*'], dest: '_instrumented/source'},
          {expand: true, cwd: config.specsPath, flatten: false, src: ['**'], dest: '_src/specs'}
        ]
      benchmarks:
        files:[ {expand: true, cwd: config.benchmarksSpecsPath,  flatten: false, src: ['**'], dest:'_src/benchmarks/specs'},
                  {expand: true, cwd: config.benchmarksSrcPath,  flatten: false, src: ['**'], dest: '_src/benchmarks/src'}
              ]

      specs:
        files: [{expand: true, cwd: config.specsDest, flatten: false, src: ['**'], dest: '_instrumented/source/specs'}]

    concat:
      testVendors:
        src: ['main/' + config.currentProject + '.js',testServerJs + 'vendor/**/*.js']
        dest: testServerJs + 'vendorUnitTestScripts.js'

    makeReport:
      src: ['coverage.json']
      options:
        dir: 'coverage'
        basePath: 'coverage'

    instrument:
      files: ['source/**/*.js']
      options:
        basePath : '_instrumented'
        flatten: false

    parallel:
      dev:
        options:
          stream: true
          grunt: true
        tasks: [
                'test',
                'watch'
                ]

    watch:
      currentProj:
        files: [config.specsPath + '**/**/*.coffee', config.jsUnderTestPath + '**/**/*.coffee']
        tasks:['clean','copy','compileCoffee', 'instrument']
        options:
          nospawn: true
          interrupt: true
          livereload: testServerWebSocketPort
      coverage:
        files: ['coverage.json']
        tasks: ['makeReport']
        options:
          nospawn: true
          interrupt: true

  grunt.registerTask 'startUnitTestServer', ->
    alreadyOn = false
    callback = (result) ->
      alreadyOn = result
      unless alreadyOn
        startServer(done, testServerPath)
      else
        console.log 'no need to start JS Unit Test Server'
        done()
    testSocket testServerPort, this.async, callback
    done = this.async()

  grunt.registerTask 'kill', ->
    exec = cp.exec
    nodekill = exec('taskkill /IM node.exe /F', {}, () ->
      done())
    nodekill.stdout.pipe process.stdout
    nodekill.stderr.pipe process.stderr
    grunt.log.write 'Waiting...'
    done = this.async()

  grunt.registerTask 'compileCoffee', ->
    exec = cp.exec
    script ='coffee.cmd'
    coffeeSrc = exec(script, null, () ->
      done())
    coffeeSrc.stdout.pipe process.stdout
    coffeeSrc.stderr.pipe process.stderr
    done = this.async()

  grunt.registerTask 'openTest', ->
    openPage done, testServerUrl
    done = this.async()

  startServer = (done, serverPath) ->
    spawn = cp.spawn
    server = spawn('node', [serverPath])
    server.stdout.pipe process.stdout
    server.stderr.pipe process.stderr
    server.on 'exit', (code) ->
      console.log 'server killed'
      done()

  openPage = (doneCallback, url) ->
    console.log(url)
    spawn = require('child_process').spawn
    chrome = spawn process.env[(if (process.platform is 'win32') then 'USERPROFILE' else 'HOME')] +
    '//AppData//Local//Google//Chrome//Application//chrome.exe',
      ['--new-tab --enable-benchmarks', url]
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