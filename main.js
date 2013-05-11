 var testcase = '';
if (window.location.pathname && window.location.pathname.length > 1)
    testcase = window.location.pathname.split('/')[1];
else if (window.location.hash && window.location.hash.length > 1)
    testcase = window.location.hash.split('#')[1];
else
    testcase = 'datetime';

requirejs.config({
    baseUrl: 'http://',
    paths: {
        'history': 'adamjmoon.github.io/itchcork/javascripts/history',
        'bootstrap': 'netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min',
        'underscore': 'cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
        'coffeescript': 'adamjmoon.github.io/itchcork/javascripts/coffeescript.min',
        'js2coffee': 'adamjmoon.github.io/itchcork/javascripts/js2coffee',
        'ItchCork': 'adamjmoon.github.io/itchcork/javascripts/itchcork.min',
        'ThemeManager': 'adamjmoon.github.io/itchcork/javascripts/itchcork.min',
        'lodash': 'adamjmoon.github.io/itchcork/javascripts/lodash.min',
        'platform': 'adamjmoon.github.io/itchcork/javascripts/platform.min',
        'benchmark': 'adamjmoon.github.io/itchcork/javascripts/benchmark.min',
        'knockout': 'ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1',
        'context': 'adamjmoon.github.io/itchcork/context/' + testcase,
        'test': 'adamjmoon.github.io/itchcork/test/' + testcase
    }
});
require(['underscore', 'knockout', 'history','bootstrap'], function () {
    require(['coffeescript', 'platform', 'lodash', 'benchmark'], function (CoffeeScript) {
        this.CoffeeScript = CoffeeScript;
//                var History = window.History; // Note: We are using a capital H instead of a lower h
//                if ( !History.enabled ) {
//                     // History.js is disabled for this browser.
//                     // This is because we can optionally choose to support HTML4 browsers or not.
//                    return false;
//                }
//                // Bind to StateChange Event
//                History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
//                    var State = History.getState(); // Note: We are using History.getState() instead of event.state
//                    History.log(State.data, State.title, State.url);
//                });
        require(['test', 'ItchCork', 'js2coffee'], function (test, ic) {
            if(!amplify.store('currentTheme')){
                amplify.store('previousTheme','');
                amplify.store('currentTheme','cyborg');
            }
            var runSpecs = new test(new ic());
        });
    });

});