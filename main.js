 var testcase = '';
if (window.location.pathname && window.location.pathname.length > 1)
    testcase = window.location.pathname.split('/')[1];
else if (window.location.hash && window.location.hash.length > 1)
    testcase = window.location.hash.split('#')[1];
else
    testcase = 'datetime';

//var root = 'file:///Users/moon/Projects/itchcork/';
var root = 'adamjmoon.github.io/itchcork/';

requirejs.config({
    baseUrl: 'http://',
    paths: {
        'bootstrap': 'netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min',
        'underscore': 'cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
        'coffeescript': 'adamjmoon.github.io/itchcork/javascripts/coffeescript.min',
        'js2coffee': 'adamjmoon.github.io/itchcork/javascripts/js2coffee',
        'ItchCork': root + 'javascripts/itchcork.min',
        'ThemeManager': root + 'javascripts/itchcork.min',
        'lodash': root + 'javascripts/lodash.min',
        'platform': root + 'javascripts/platform.min',
        'benchmark': 'adamjmoon.github.io/itchcork/javascripts/benchmark.min',
        'knockout': 'ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1',
        'context': root + 'context/' + testcase,
        'test': root + 'test/' + testcase
    }
});
require(['underscore', 'knockout','bootstrap'], function () {
    require(['coffeescript', 'platform', 'lodash', 'benchmark'], function (CoffeeScript) {
        this.CoffeeScript = CoffeeScript;
        require(['test', 'ItchCork', 'js2coffee'], function (test, itchcork) {
            if(!amplify.store('currentTheme')){
                amplify.store('previousTheme','');
                amplify.store('currentTheme','cyborg');
            }
            var runSpecs = new test(new itchcork());
        });
    });

});