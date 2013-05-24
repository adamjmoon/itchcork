define("ItchCork", ['Suite', 'SuiteView', 'Test', 'Spy', 'Verify', 'UnitTestFrameworkManager'], function (Suite, SuiteView, Test, Spy, Verify, UnitTestFrameworkManager) {
    'use strict';
    var ItchCork = function() {

        ItchCork.prototype.Suite = Suite;
        ItchCork.prototype.SuiteView = SuiteView;
        ItchCork.prototype.Test = Test;
        ItchCork.prototype.Spy = Spy;
        ItchCork.prototype.Verify = Verify;
        ItchCork.prototype.UnitTestFrameworkManager = UnitTestFrameworkManager;
    };

    return new ItchCork();
});