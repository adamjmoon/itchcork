var testcase = '';
if (window.location.pathname && window.location.pathname.length > 1)
    testcase = window.location.pathname.split('/')[1];
else if (window.location.hash && window.location.hash.length > 1)
    testcase = window.location.hash.split('#')[1];
else
    testcase = 'datetime';

var root = 'raw.github.com/adamjmoon/itchcork/master/';
requirejs.config({
    baseUrl: 'https://',
    paths: {
        'bootstrap': 'netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min',
        'underscore': 'cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
        'coffeescript': root + 'vendor/coffee/coffeescript.min',
        'js2coffee': root + 'vendor/coffee/js2coffee',
        'ItchCork': root + 'itchcork.min',
        'lodash': root + 'vendor/aa.lodash.min',
        'mocha': root + 'vendor/mocha',
        'sinonM': root + 'vendor/sinon',
        'chai': root + 'vendor/chai',
        'sinon-chai': root + 'vendor/sinon-chai',
        'platform': root + 'vendor/platform',
        'benchmark': root + 'vendor/benchmark',
        'knockout': 'ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1',
        'context': root + 'examples/context/' + testcase,
        'suite': root + 'examples/test/' + testcase
    }
});
require(['underscore', 'knockout', 'bootstrap'], function () {
    $("#topNav").show();
    $('div.frame').show();
    require(['coffeescript', 'platform', 'benchmark', 'sinonM'], function (CoffeeScript) {
        this.CoffeeScript = CoffeeScript;
        require(['js2coffee'], function () {
            require(['ItchCork'], function (itchcork) {
                var unitTestFrameworkManager = new itchcork.UnitTestFrameworkManager();
                if (unitTestFrameworkManager.init() === "itchcork") {
                    require(['suite'], function (suite) {
                        var suiteView = new itchcork.SuiteView();
                        suiteView.add(suite);
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