var express = require('express')
    , http = require('http')
    , fs = require('fs')
    , path = require('path')
    , growl = require('growl')
    , config = require('./configs/config');


var app = module.exports = express();

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.use(express.errorHandler());
app.configure('production', function () {
});

app.configure(function () {
    app.locals.basedir = __dirname;
    app.set('port', 4000);
    app.set('views', app.locals.basedir + '/views/');
    app.set('view engine', 'jade');
    app.use(express.favicon());

    app.use(express.logger('dev'));
    app.use(express.bodyParser({
        keepExtensions: false
    }));
    app.use(app.router);
    app.use(express.static(__dirname));
    // make a custom html template
});


app.configure('development', function () {
    app.use(express.errorHandler());
});

// Routes

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/runner', function (req, res) {
    res.render('runner');
    next();
});

app.get('/specs', function (req, res) {
    var path = config.specsDest;

    walkDir(path, function (err, specsList) {
        if (err) throw err;
        console.log(specsList);
        res.send(specsList);
    }, true);
});

app.get('/benchmarkList', function (req, res) {
    var path = __dirname + '/benchmarks/specs/';
    var requireSpecList = [];
    fs.readdir(path, function (err, files) {
        var benchmark = '';
        if (files) {
            for (var i = 0, j = files.length; i < j; i++) {
                if (files[i].indexOf('.js') > -1) {
                    benchmark = 'benchmarks/specs/' + files[i];
                    requireSpecList.push(benchmark);
                }
            }
        }
        res.send(requireSpecList);
    });
});

app.get('/benchmarks', function (req, res) {
    res.render('benchmarks');
});

app.all('/results', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/coverage', function (req, res) {
    res.render('coverage');
});

app.post('/coverage', function (req, res) {

    var path = __dirname;

    fs.writeFile(path + '/coverage.json', req.body.coverage, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("coverage.json file was saved!");
            res.send(200);
        }
    });
});

app.post('/stats', function (req, res) {

    var resultsFilePath = __dirname + '\\results\\' + config.currentProject + '.json';
    if (typeof(growl) != "undefined") {
        var stats = req.body.stats;
        if (stats.failures > 0) {
            growl(stats.failures + ' of ' + stats.tests + ' tests failed', {
                title: "JS Unit Test Failure",
                image: __dirname + "/content/error.png"
            });
        }
        else {
            growl(stats.passes + ' tests passed in ' + stats.duration + 'ms', {
                title: "JS Unit Test Success",
                image: __dirname + "/content/ok.png"
            });
        }
    }

    fs.writeFile(resultsFilePath, req.body.stats, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("results.json file was saved!");
            res.send(200);
        }
    });
});

app.get('/sourceList', function (req, res) {
    var path = __dirname + '/_src';

    walkDir(path, function (err, sourceList) {
        if (err) throw err;
        console.log(sourceList);
        res.send(sourceList);
    }, false);
});

function walkDir(dir, done, specs){
    var originalDir = '';
    var specsOnly = false;

   function walk(dir, done, specs) {

        if (specs) {
            specsOnly = true;
        }


        if (originalDir.length == 0) {
            originalDir = dir;
        }
        var results = [];
        fs.readdir(dir, function (err, list) {
            if (err) return done(err);
            var i = 0;
            (function next() {
                var file = list[i++];
                if (!file) return done(null, results);
                file = dir + '/' + file;
                fs.stat(file, function (err, stat) {
                    if (stat && stat.isDirectory()) {
                        walk(file, function (err, res) {
                            results = results.concat(res);
                            next();
                        },specsOnly);
                    } else {
                        if (specsOnly) {
                            if (file.indexOf('_spec.js') > -1) {
                                results.push(file.replace(originalDir, 'specs').replace('.js',''));
                            }
                        } else {
                            if (file.indexOf('.js') > -1 && file.indexOf('/vendor/') === -1
                                && (file.indexOf('/benchmarks/') === -1)
                                && (file.indexOf('/specs/') === -1)
                                && file.indexOf('/logger') === -1
                                && file.indexOf('/logger') === -1
                                && file.indexOf('/lib/') === -1
                                && file.indexOf('/appStart.js') === -1
                                && file.indexOf('/reload-client.js') === -1
                                && file.indexOf('/override.js') === -1
                                && file.indexOf('/main.js') === -1
                                && file.indexOf('/creditScoresWidgetViewmodel.js') === -1
                                && file.indexOf('/touchToggle.js') === -1) {
                                results.push(file.replace(originalDir + '/', '').replace('.js', ''));
                            }
                        }

                        next();
                    }
                });
            })();
        });
    };
    walk(dir,done,specs);
}


// Start the app
http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});