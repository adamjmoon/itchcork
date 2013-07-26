define("SuiteViewModel", [], function() {
  var vm =  function() {
      var self = this;
      this.num;
      this.suiteDesc = ko.observable('');
      this.jsContextStr = ko.observable('');
      this.coffeeContextStr = ko.observable('');
      this.tests = ko.observableArray([]);
      this.testCases = ko.observableArray([]);
      this.shouldShow = ko.observable(true);
      this.benchmarks = ko.observableArray([]);
      this.benchmarksDone = ko.observable(false);
      this.benchmarkPlatform = ko.observable('');
      this.benchmarkSuite;

      this.benchmark = function () {
          self.benchmarksDone(false);
          self.benchmarks.removeAll();
          self.benchmarkSuite.run();

          return self;
      };

  };

  return vm;
});