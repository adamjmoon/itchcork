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
        'themeManager': root + 'themeManager.min',
        'bootstrap': root + 'scripts.min',
        'underscore': root + 'scripts.min',
        'coffeescript': root + 'scripts.min',
        'js2coffee': root + 'scripts.min',
        'ItchCork': root + 'itchcork.min',
        'lodash': root + 'scripts.min',
        'mocha': root + 'scripts.min',
        'sinonM': root + 'scripts.min',
        'chai': root + 'scripts.min',
        'sinon-chai': root + 'scripts.min',
        'platform': root + 'scripts.min',
        'benchmark': root + 'scripts.min',
        'knockout': root + 'scripts.min',
        'context': root + 'examples/context/' + testcase,
        'suite': root + 'examples/test/' + testcase
    }
});
require(['themeManager', 'underscore', 'knockout', 'bootstrap'], function () {
    $("#topNav").show();
    $('div.frame').show();
    require(['coffeescript', 'platform', 'lodash', 'benchmark', 'sinonM'], function (CoffeeScript) {
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