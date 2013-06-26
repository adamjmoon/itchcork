require(['https://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1.js', 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js'], function (ko) {
    window.ko = ko;

    require(['SuiteView'], function (sv) {
        window.suiteView = new sv();
        var context = '';
        if (window.location.pathname && window.location.pathname.length > 1)
            context = window.location.pathname.split('/')[1];
        else if (window.location.hash && window.location.hash.length > 1)
            context = window.location.hash.split('#')[1];

        var suite = context != '' ? window.suiteView.unitTestFrameworkManager.getFramework() + '/' + context : 'all-' + window.suiteView.unitTestFrameworkManager.getFramework();
        var suiteFilePath = suiteView.contextRoot() + 'examples/test/' + suite;

        requirejs.config({
            baseUrl: 'https://',
            paths: {
                'bootstrap': 'netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min',
                'coffeescript': suiteView.vendorRoot() + 'coffee/coffeescript.min',
                'js2coffee': suiteView.vendorRoot() + 'coffee/js2coffee',
                'lodash': suiteView.vendorRoot() + 'aa.lodash.min',
                'mocha': suiteView.vendorRoot() + 'mocha',
                'sinon': suiteView.vendorRoot() + 'sinon',
                'chai': suiteView.vendorRoot() + 'chai',
                'sinon-chai': suiteView.vendorRoot() + 'sinon-chai',
                'platform': suiteView.vendorRoot() + 'platform',
                'benchmark': suiteView.vendorRoot() + 'benchmark',
                'context': suiteView.contextRoot() + 'examples/all-context',
                'suite': suiteFilePath
            }
        });
        require(['bootstrap', 'sinon'], function () {
            window.sinon = sinon;
            $("#topNav").show();
            $('div.frame').show();
            require(['coffeescript', 'platform', 'benchmark'], function (CoffeeScript) {
                this.CoffeeScript = CoffeeScript;
                require(['js2coffee'], function () {

                    require(['ItchCork', 'context'], function (itchcork) {
                        if (window.suiteView.unitTestFrameworkManager.init() === "itchcork") {
                            require(['suite'], function () {
                                window.suiteView.show();
                            });
                        }
                        else {

                            require(['chai', 'sinon-chai', 'mocha'], function (chai, sinonChai) {
                                require(['suite'], function () {
                                    mocha.addFile();
                                    chai.use(sinonChai);
                                    var assert = chai.assert;
                                    var should = chai.should();
                                    mocha.setup('bdd');
                                    mocha.reporter('html');
                                    var runner = mocha.run();
                                    runner.on('end', function () {
                                        console.log(runner);
                                        _.each(runner.suite.suites,
                                            function (s) {
                                                console.log(s);
                                                require([s.title], function (c) {

                                                    var suite = new itchcork.Suite(s.title, c, "mocha");

                                                    window.suiteView.add(suite);
                                                });
                                            });
                                        window.suiteView.totalTests(runner.total);
                                        window.suiteView.totalPassed(runner.total - runner.failures);
                                        window.suiteView.totalFailed(runner.failures);
                                        window.suiteView.show();
                                        //var suites = $("ul#mocha-report li.suite ul");
//                                        $("#collapse").click(function () {
//                                            $(suites).each(function (index, element) {
//                                                element.hidden = true;
//                                            });
//                                            $("#collapse").hide();
//                                            $("#expand").show();
//                                        });
//                                        $("#expand").click(function () {
//                                            $(suites).each(function (index, element) {
//                                                element.hidden = false;
//                                            });
//                                            $("#expand").hide();
//
//                                            $("#collapse").show();
//                                        });
                                    });
                                });
                            });
                        }
                    });
                });
            });
        });
    });

});
