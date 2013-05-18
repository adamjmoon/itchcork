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
        'coffeescript': root + 'vendor/coffeescript.min',
        'js2coffee': root + 'vendor/js2coffee',
        'ItchCork': root + 'itchcork.min',
        'lodash': root + 'vendor/lodash.min',
        'mocha': root + 'vendor/mocha',
        'sinon': root + 'vendor/sinon',
        'chai': root + 'vendor/chai',
        'sinon-chai': root + 'vendor/sinon-chai',
        'platform': root + 'vendor/platform.min',
        'benchmark': root + 'vendor/benchmark.min',
        'knockout': 'ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1',
        'context': root + 'context/' + testcase,
        'test': root + 'test/' + testcase
    }
});
require(['underscore', 'knockout', 'bootstrap'], function () {
    require(['coffeescript', 'platform', 'lodash', 'benchmark', 'chai', 'sinon', 'sinon-chai', 'mocha'], function (CoffeeScript) {
        this.CoffeeScript = CoffeeScript;
        require(['test', 'ItchCork', 'js2coffee'], function (test, itchcork) {
            var ic = new itchcork();
            var themeManager = new ic.ThemeManager();
            var unitTestFrameworkManager = new ic.UnitTestFrameworkManager();
            themeManager.init();
            if (unitTestFrameworkManager.init() === "itchcork") {
                var runSpecs = new test(ic);
            }
            else {
                chai.use(sinonChai);
                var assert = chai.assert;
                var should = chai.should();
                mocha.setup('bdd');
                mocha.reporter('html');
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
            }
        });
    });

});