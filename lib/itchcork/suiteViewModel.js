define("SuiteViewModel", ['benchmark'], function(Benchmark) {
  var vm =  function() {
      var self = this;
      this.num=0;
      self.passedCount = ko.observable(0), self.failedCount = ko.observable(0);
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

          self.benchmarks.removeAll();

          self.runBenchmarks(self.benchmarkSuite);
      }

      this.runBenchmarks = function (benchmarkSuite, callback) {
          benchmarkSuite.on('cycle', function (event) {
              var b = event.target;

              var bm = new bVM();
              bm.name(b.name);
              bm.expression(b.name.replace(/context\.(.*?)\(\)\;/gi, '$1'));
              bm.hz(b.hz.toFixed(0));
              bm.relativateMarginError(b.stats.rme.toFixed(2) + '%');
              bm.iterationPerSampleCycle(b.count);
              bm.numAnalysisCycles(b.cycles);
              bm.numSampleCycles(b.stats.sample.length);

              self.benchmarks.push(bm);
          })
              .on('complete', function () {

                  benchmarks.sort(function (left, right) {
                      var leftHz = parseInt(left.hz());
                      var rightHz = parseInt(right.hz());
                      return leftHz == rightHz ? 0 : (leftHz > rightHz ? -1 : 1)
                  });
                  benchmarks()[0].fastest(true);
                  var length = benchmarks().length;
                  benchmarks()[length - 1].slowest(true);
                  var slowestHz = benchmarks()[length - 1].hz();
                  for (var i = 0; i < length; i++) {
                      benchmarks()[i].timesFaster((benchmarks()[i].hz() / slowestHz).toFixed(3));
                  }
                  self.benchmarksDone(true);
              });


          benchmarkSuite.run();
      };



  };

  return vm;
});