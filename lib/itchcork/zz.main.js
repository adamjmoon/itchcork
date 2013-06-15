var testcase = '';
if (window.location.pathname && window.location.pathname.length > 1)
    testcase = window.location.pathname.split('/')[1];
else if (window.location.hash && window.location.hash.length > 1)
    testcase = window.location.hash.split('#')[1];


var root = 'raw.github.com/adamjmoon/itchcork/master/';
requirejs.config({
    baseUrl: 'https://',
    paths: {
        'bootstrap': 'netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min',
        'underscore': 'cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
        'coffeescript': root + 'vendor/coffee/coffeescript.min',
        'js2coffee': root + 'vendor/coffee/js2coffee',
        'lodash': root + 'vendor/aa.lodash.min',
        'mocha': root + 'vendor/mocha',
        'sinonM': root + 'vendor/sinon',
        'chai': root + 'vendor/chai',
        'sinon-chai': root + 'vendor/sinon-chai',
        'platform': root + 'vendor/platform',
        'benchmark': root + 'vendor/benchmark',
        'knockout': 'ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1',
        'context': root + 'examples/context',
        'suite': root + 'examples/test/' + testcase.length > 0 ? amplify.store('currentUnitTestFramework') + '/' + testcase : 'all-' + amplify.store('currentUnitTestFramework')
    }
});
require(['underscore', 'knockout', 'bootstrap'], function () {
    $("#topNav").show();
    $('div.frame').show();
    require(['coffeescript', 'platform', 'benchmark', 'sinonM'], function (CoffeeScript) {
        this.CoffeeScript = CoffeeScript;
        require(['js2coffee'], function () {
            require(['SuiteView'], function (sv) {
                window.suiteView = new sv();
                require(['ItchCork'], function (itchcork) {
                    if (window.suiteView.unitTestFrameworkManager.init() === "itchcork") {
                        require(['suite'], function(){
                            window.suiteView.show();
                        });
                    }
                    else {
                        define('sinon', [], function () {
                            return sinon;
                        });
                        require(['chai', 'sinon', 'sinon-chai', 'mocha'], function (chai, sinon, sinonChai) {
                            chai.use(sinonChai);
                            var assert = chai.assert;
                            var should = chai.should();
                            mocha.setup('bdd');
                            mocha.reporter('html');


                            require(['suite'], function (suite) {
                                _.each(mocha.suite.suites,
                                    function (s) {
                                        var suite = new itchcork.Suite(s.title, s.ctx);
                                        window.suiteView.add(suite);
                                    });
                                window.suiteView.show();
                                var runner = mocha.run();
                                runner.on('end', function () {
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
                                });
                            });
                        });
                    }
                });
            });

        });
    });
});