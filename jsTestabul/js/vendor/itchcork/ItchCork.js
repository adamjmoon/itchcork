define("ItchCork", ['Suite', 'Test', 'Spy', 'Verify'], function (Suite, Test, Spy, Verify) {
    'use strict';
    var itchcork = function () {

        itchcork.prototype.Suite = Suite;
        itchcork.prototype.Test = Test;
        itchcork.prototype.Spy = Spy;
        itchcork.prototype.Verify = Verify;
    };
    window.ItchCork = new itchcork();
    window._bTestResults = {};
    return window.ItchCork;
});