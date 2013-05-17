define("ItchCork", ['Suite', 'Test', 'Spy', 'Verify', 'ThemeManager','UnitTestFrameworkManager'], function(Suite, Test, Spy, Verify, ThemeManager, UnitTestFrameworkManager) {
  'use strict';
  return function ItchCork() {
      ItchCork.prototype.Suite = Suite;
      ItchCork.prototype.Test = Test;
      ItchCork.prototype.Spy = Spy;
      ItchCork.prototype.Verify = Verify;
      ItchCork.prototype.ThemeManager = ThemeManager;
      ItchCork.prototype.UnitTestFrameworkManager = UnitTestFrameworkManager;
  };
});