

    require(['SuiteView', 'itchcork', ''], function (sv, itchcork) {

        window.suiteView = new sv();
        var context = '';
        if (window.location.pathname && window.location.pathname.length > 1)
            context = window.location.pathname.split('/')[1];
        else if (window.location.hash && window.location.hash.length > 1)
            context = window.location.hash.split('#')[1];

        var suite = context != '' ? window.suiteView.unitTestFrameworkManager.getFramework() + '/' + context : 'all-' + window.suiteView.unitTestFrameworkManager.getFramework();
        var suiteFilePath = suiteView.contextRoot() + 'examples/test';

        requirejs.config({
            baseUrl: 'https://',
            paths: {
                'context': suiteView.contextRoot() + 'examples/all-context',
                'suite': suiteFilePath + "/" + suite,
                'suitePath': suiteFilePath
            }
        });

            $("#topNav").show();
            $('div.frame').show();

        require(['ItchCork', 'context'], function (itchcork) {
            if (window.suiteView.unitTestFrameworkManager.init() === "itchcork") {
                require(['suite'], function () {

                });
            }

            var runItchCork = function () {
                "use strict";
                $.get('/benchmarkList', function (benchmarks) {
                    require(benchmarks, function () {
                    });
                });
            };

            var runMocha = function () {
                chai.use(sinonChai);
                window.assert = chai.assert;
                window.should = chai.should();
                   require(['chai', 'sinon-chai','mocha'], function (chai, sinonChai, mocha) {

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
                                require(specs, function () {
                                    var runner = mocha.run();

                                    runner.on('end', function () {
                                        window.suiteView.totalTests(runner.total);
                                        window.suiteView.totalPassed(runner.total - runner.failures);
                                        window.suiteView.totalFailed(runner.failures);
                                            _.each(runner.suite.suites,
                                                function (s) {
                                                    require([s.title], function (c) {
                                                       // var suite = new window.ItchCork.Suite(s.title, c, "mocha");
                                                    });
                                                });
                                        var suites = $("ul#mocha-report li.suite ul");
                                        $("#collapse").click(function () {
                                            $(suites).each(function (index, element) {
                                                element.hidden = true;
                                            });
                                            $("#collapse").hide();
                                            $("#expand").show();
                                        });
                                        $("#expand").click(function () {
                                            $(suites).each(function (index, element) {
                                                element.hidden = false;
                                            });
                                            $("#expand").hide();

                                            $("#collapse").show();
                                        });
                                        postResults(runner.stats, function () {
                                            }
                                        );
                                        window.suiteView.bindView();
                                    });
                                });
                            }
                        }
                    });
                };




                    else if (view.indexOf('benchmarks') > -1) {
                        window.suiteView.currentView('Benchmarks');
                        window.suiteView.unitTestFrameworkManager.set('itchcork');
                        require(['/js/app.js'], function () {
                            "use strict";
                            runItchCork();
                        })
                        ;
                    }
                    else {

                        window.suiteView.currentView('UnitTests');
                        window.suiteView.unitTestFrameworkManager.set('mocha');
                        require(['mocha','/js/app.js'], function () {
                            window.mocha = mocha;
                            runMocha();
                        });
                    }
                });
            });
        });
    });
});