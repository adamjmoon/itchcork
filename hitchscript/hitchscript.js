if (Meteor.isClient) {

    Template.hitchscript.created = function () {

        var testcase = '';
        if (window.location.pathname && window.location.pathname.length > 1)
            testcase = window.location.pathname.split('/')[1];
        else if (window.location.hash && window.location.hash.length > 1)
            testcase = window.location.hash.split('#')[1];
        else
            testcase = 'datetime';

        requirejs.config({
            baseUrl: 'https://',
            paths: {
                'jquery': 'cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min',
                'history': 'raw.github.com/balupton/history.js/master/scripts/compressed/history',
                'bootstrap': 'netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min',
                'underscore': 'cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
                'coffeescript': 'raw.github.com/adamjmoon/itchcork/master/vendor/coffeescript.min',
                'js2coffee': 'raw.github.com/adamjmoon/itchcork/master/vendor/js2coffee.min',
                'ItchCork': 'raw.github.com/adamjmoon/itchcork/master/itchcork.min',
                'ThemeManager': 'raw.github.com/adamjmoon/itchcork/master/itchcork.min',
                'lodash': 'cdnjs.cloudflare.com/ajax/libs/lodash.js/1.2.0/lodash.min',
                'platform': 'raw.github.com/adamjmoon/itchcork/master/vendor/platform.min',
                'benchmark': 'raw.github.com/adamjmoon/itchcork/master/vendor/benchmark.min',
                'knockout': 'ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1',
                'context': 'raw.github.com/adamjmoon/itchcork/master/context/' + testcase,
                'test': 'raw.github.com/adamjmoon/itchcork/master/test/' + testcase
            }
        });
        require(['jquery', 'underscore', 'knockout', 'history','bootstrap'], function () {
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

    };

    Template.ga.rendered = function () {
        if (!(window._gaq != null)) {
            window._gaq = [];
            _gaq.push(['_setAccount', 'UA-40741651-1']);
            _gaq.push(['_trackPageview']);
            return (function () {
                var ga, gajs, s;
                ga = document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                gajs = '.google-analytics.com/ga.js';
                ga.src = 'https:' === document.location.protocol ? 'https://ssl' + gajs : 'http://www' + gajs;
                s = document.getElementsByTagName('script')[0];
                return s.parentNode.insertBefore(ga, s);
            })();
        }
    };
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
