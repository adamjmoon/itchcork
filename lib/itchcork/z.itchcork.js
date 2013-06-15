define("ItchCork", ['Suite', 'Test', 'Spy', 'Verify'], function (Suite, Test, Spy, Verify) {
    'use strict';
    var ItchCork = function() {

        ItchCork.prototype.Suite = Suite;
        ItchCork.prototype.Test = Test;
        ItchCork.prototype.Spy = Spy;
        ItchCork.prototype.Verify = Verify;
    };

    return new ItchCork();
});