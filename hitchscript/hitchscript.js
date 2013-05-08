if (Meteor.isClient) {

    Template.hitchscript.created = function () {

        var testcase = '';
        if (window.location.hash)
            testcase = window.location.hash.split('#')[1];
        else
            testcase = 'datetime';

        requirejs.config({
            baseUrl: 'https://',
            paths: {
                'FiddleSticks': 'raw.github.com/adamjmoon/itchcork/master/itchcork.min',
                'ThemeManager': 'raw.github.com/adamjmoon/itchcork/master/itchcork.min',
                'lodash': 'cdnjs.cloudflare.com/ajax/libs/lodash.js/1.2.0/lodash.min',
                'platform': 'cdnjs.cloudflare.com/ajax/libs/platform/0.4.0/platform.min',
                'benchmark': 'raw.github.com/bestiejs/benchmark.js/master/benchmark',
                'knockout': 'ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1',
                'context': 'raw.github.com/adamjmoon/itchcork/master/context/' + testcase,
                'run': 'raw.github.com/adamjmoon/itchcork/master/test/' + testcase
            }
        });
        require(['run'], function (run) {
            var runSpecs = new run();
        });
    }
};

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
