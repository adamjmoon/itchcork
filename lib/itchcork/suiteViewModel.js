define("SuiteViewModel", ['benchmark','BenchmarkUtil'], function(Benchmark,BenchmarkUtil) {
  var vm =  function() {
      var self = this;
      this.num;
      this.suiteDesc = ko.observable('');
      this.jsContextStr = ko.observable('');
      this.coffeeContextStr = ko.observable('');
      this.tests = ko.observableArray([]);
      this.testCases = ko.observableArray([]);
      this.shouldShow = ko.observable(true);
      self.benchmarks = ko.observableArray([]);
      this.benchmarksDone = ko.observable(false);
      this.benchmarkPlatform = ko.observable('');
      this.benchmarkSuite = new Benchmark.Suite();
      this.benchmarkPlatform(Benchmark.platform.description);

      this.processBenchmarks = function() {
          var benchmarkUtil = new BenchmarkUtil();
          //self.benchmarks.removeAll();

          benchmarkUtil.runBenchmarks(self.benchmarkSuite,
              function(bms){
                  self.benchmarks = bms;
                  self.benchmarksDone(true);
              }
          );
      }



  };

  return vm;
});