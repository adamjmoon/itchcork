define("ItchCork", ['Suite', 'Test', 'Spy', 'Verify', 'ThemeManager'], function(Suite, Test, Spy, Verify, ThemeManager) {
  return function ItchCork() {
      ItchCork.prototype.Suite = Suite;
      ItchCork.prototype.Test = Test;
      ItchCork.prototype.Spy = Spy;
      ItchCork.prototype.Verify = Verify;
      ItchCork.prototype.ThemeManager = ThemeManagser;
  };
});