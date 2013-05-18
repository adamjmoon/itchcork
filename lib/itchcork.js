define("ItchCork", ['Suite', 'Test', 'Spy', 'Verify', 'UnitTestFrameworkManager'], function (Suite, Test, Spy, Verify, UnitTestFrameworkManager) {
    'use strict';
    return function ItchCork() {
        ItchCork.prototype.Suite = Suite;
        ItchCork.prototype.Test = Test;
        ItchCork.prototype.Spy = Spy;
        ItchCork.prototype.Verify = Verify;
        ItchCork.prototype.UnitTestFrameworkManager = UnitTestFrameworkManager;
    };
});