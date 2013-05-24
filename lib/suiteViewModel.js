define("SuiteViewModel", ['knockout', 'UnitTestFrameworkManager'], function(ko, utfm) {
  var vm =  function() {
      this.suiteDesc = ko.observable('');
      this.jsContextStr = ko.observable('');
      this.coffeeContextStr = ko.observable('');
      this.tests = ko.observableArray([]);
      this.testCases = ko.observableArray([]);
      this.shouldShow = ko.observable(true);
      this.benchmarks = ko.observableArray([]);
      this.benchmarksDone = ko.observable(false);
      this.benchmarkPlatform = ko.observable('');
      this.unitTestFrameworkManager = new utfm();
  };

  return vm;
});