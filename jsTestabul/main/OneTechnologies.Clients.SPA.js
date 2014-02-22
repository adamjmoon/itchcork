(function () {
    "use strict";
    window.setupRequire = function (withCoverage, cb) {

        var pathsConfig = {
            'hammer': 'vendor/hammerjs/jquery.hammer',
            'iscroll': 'vendor/iscroll/iscroll',
            'highcharts': 'vendor/highcharts/highcharts',
            'text': 'lib/require/text',
            'durandal': 'lib/durandal/js',
            'plugins': 'lib/durandal/js/plugins',
            'transitions': 'lib/durandal/js/transitions',
            'knockout': 'lib/knockout',
            'knockout.validation': 'lib/knockout.validation',
            'jquery': 'lib/jquery',
            'underscore': 'lib/underscore',
            'amplify': 'lib/amplify',
            'nicescroll': 'lib/nicescroll'
        };
        if (!withCoverage) {
            requirejs.config({
                baseUrl: "_src",
                paths: pathsConfig
            });
        }

        else {
            requirejs.config({
                baseUrl: "_instrumented/source",
                paths: pathsConfig
            });
        }

        if (cb)
            cb();
    };
    setupRequire(false);
})();