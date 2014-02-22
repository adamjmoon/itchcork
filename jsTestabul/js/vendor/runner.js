require(['jquery', 'knockout', 'underscore', 'amplify', 'knockout.validation'], function ($, ko, _) {
    "use strict";
    window.jQuery = $;
    window.ko = ko;

    require(['SuiteView', 'lib/customBindings','nicescroll', 'ot/jsUtils'], function (sv, customBindings) {
        var context = '';
        customBindings();
        if (window.location.pathname && window.location.pathname.length > 1)
            context = window.location.pathname.split('/')[1];
        else if (window.location.hash && window.location.hash.length > 1)
            context = window.location.hash.split('#')[1];

        var suite = context != '' ? window.suiteView.unitTestFrameworkManager.getFramework() + '/' + context : 'all-' + window.suiteView.unitTestFrameworkManager.getFramework();
        var suiteFilePath = suiteView.contextRoot() + 'examples/test';
        var withCoverage = window.location.pathname.indexOf('coverage') > -1
        var withBenchmarks = window.location.pathname.indexOf('benchmarks') > -1

        var requireLibs = require.config({
            baseUrl: '',
            paths: {
                'bootstrap': 'https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min',
                'coffeescript': 'lib/coffeescript',
                'js2coffee': 'lib/js2coffee',
                'sinon': 'lib/sinon',
                'chai': 'lib/chai',
                'sinon-chai': 'lib/sinon-chai',
                'jscolor': 'lib/jscolor',
                'platform': 'lib/platform',
                'benchmark': 'lib/benchmark',
                'lodash': 'lib/lodash',
                'mocha': 'lib/mocha',
                'hammer': 'lib/hammer',
                'scrollTo' : 'lib/jquery.scrollTo',
                'localScroll' : 'lib/jquery.localScroll',
                'ace' : 'lib/ace/'
            }
        });

        requireLibs(['sinon', 'bootstrap', 'hammer','scrollTo','localScroll'], function () {

            requireLibs(['coffeescript', 'platform', 'benchmark'], function (CoffeeScript) {
                window.CoffeeScript = CoffeeScript;
                requireLibs(['js2coffee', 'ItchCork'], function () {
                    var srcList = undefined, index = 0;

                    setupRequire(false, function () {
                        if (withCoverage) {
                            setupRequire(true);
                            window.suiteView.currentView('Coverage');
                            requireLibs(['mocha'], function () {
                                "use strict";
                                window.mocha = mocha;
                                window.suiteView.unitTestFrameworkManager.set('mocha');
                                runMocha(true);
                            });
                        }
                        else if (withBenchmarks) {
                            window.suiteView.currentView('Benchmarks');
                            window.suiteView.unitTestFrameworkManager.set('itchcork');
                            runItchCork();
                        }
                        else {
                            window.suiteView.currentView('UnitTests');
                            window.suiteView.unitTestFrameworkManager.set('mocha');
                            requireLibs(['mocha'], function () {
                                window.mocha = mocha;
                                runMocha(true);
                            });
                        }

                        function postResults(stats, callback) {

                            $.post("/stats", { stats: JSON.stringify(stats)}, function () {
                                if (callback) {
                                    callback();
                                }
                            });
                        }

                        function postCoverage() {

                            if (window.__coverage__) {
                                var coverage = JSON.stringify(window.__coverage__.valueOf());
                                $.post("/coverage", {coverage: coverage});
                            }

                        };

                        function runItchCork() {
                            "use strict";
                            $.get('/benchmarkList', function (benchmarks) {
                                suiteView.numberSuites = benchmarks.length;

                                requireLibs(benchmarks, function () {
                                    suiteView.done();
                                });
                            });
                        };

                        var doneCount = 0;
                        var mochaDone = function () {
                            $("#mocha-report").niceScroll("#mocha",{cursorcolor:"#0F0", bouncescroll: true, railpadding: {top:0,right:20} });
                            doneCount = doneCount + 1;
                            console.log(doneCount);
                            postCoverage();
                            var i, moduleName = '', suite;


                            $.get('/sourceList', function (sourceList) {
                                for (i = 0; i < sourceList.length; i++) {

                                    processSrc(sourceList[i]);
                                    if (i === sourceList.length - 1) {
                                        suiteView.highlight();
                                    }

                                }

                                function processSrc(moduleName) {
                                    try {
                                        require([moduleName], function (module) {
                                            if (module) {
                                                if(!withCoverage){
                                                   suite = new ItchCork.Suite(moduleName, module, "mocha");
                                                }

                                            }
                                        });
                                    } catch (ex) {
                                        console.log(ex);
                                    }
                                }
                            });
                        }


                        var runMocha = function (solo) {
                            requireLibs(['chai', 'sinon-chai', 'mocha'], function (chai, sinonChai) {
                                window.mocha = mocha;
                                chai.use(sinonChai);
                                chai.Assertion.includeStack = true;
                                chai.Assertion.addChainableMethod("you", function () {
                                }, function () {
                                    return this;
                                });
                                window.expect = chai.expect;

                                if (window.location.search) {
                                    var array = window.location.search.split('?');
                                    var spec = array[1];
                                    run([spec]);
                                } else {
                                    $.get('/specs', function (specs) {
                                        run(specs);
                                    });
                                }
                                var run = function (specs) {

                                    if (window.mochaPhantomJS) {
                                        mochaPhantomJS.run();
                                    }
                                    else {
                                        mocha.checkLeaks();
                                        mocha.globals(['jQuery']);
                                        mocha.run();
                                        mocha.setup('bdd');
                                        mocha.reporter('html');

                                        try {
                                            require(specs, function () {
                                                var runner = mocha.run();
                                                runner.on('end', function () {
                                                    window.suiteView.totals.Tests(runner.total);
                                                    window.suiteView.totals.Passed(runner.stats.passes);
                                                    window.suiteView.totals.Failed(runner.stats.failures);


                                                    $("#mocha a").attr('href', '#');
                                                    $("#mocha code").addClass('well');

                                                    $("#mocha a").click(function () {
                                                        var tests = Array.prototype.slice.call( $(this).parent().siblings()[0].children );
                                                        tests.forEach(
                                                            function(test){
                                                                if(test.hidden){
                                                                    test.hidden = false;
                                                                }else{
                                                                    test.hidden = true;
                                                                }
                                                            }
                                                        );


                                                    });


                                                    mochaDone();
                                                    postResults(runner.stats);
                                                });
                                            });
                                        }
                                        catch (ex) {
                                            console.log(ex);
                                        }

                                    }
                                }
                            });
                        };
                    });
                });
            });
        });
    });
});