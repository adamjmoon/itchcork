define("Suite", ['Test', 'benchmark', 'knockout','SuiteViewModel','BenchmarkViewModel'], function (Test, Benchmark, ko, sVM, bVM) {
    var suite =  function (desc, js) {
        "use strict";
        var self = this;
        self.vm = new sVM();
        self.jsContext;
        self.benchmarkSuite = new Benchmark.Suite;

        self.map = function(){
            self.vm.suiteDesc(desc);
            self.vm.jsContextStr(js.toString() + "\n var c = new context();");
            self.vm.coffeeContextStr(Js2coffee.build(self.jsContextStr()));
            self.vm.benchmarkPlatform(Benchmark.platform.description);
            self.jsContext = new js();
            self.setupContextBreakdown(self.jsContext, 'context');
        };

        self.setupContextBreakdown = function (context, base) {
            var jsStr = '', coffeeStr = '';

            for (var prop in context) {
                if (context[prop] instanceof Function) {
                    try {
                        jsStr = context[prop].toString();
                        coffeeStr = Js2coffee.build('var func = ' + jsStr);
                        var tc = { name: base + '.' + prop, jsStr: jsStr, coffeeStr: coffeeStr};
                        self.vm.testCases.push(tc);
                    } catch (err) {

                    }

                } else if (context[prop] instanceof Object) {
                    if (Object.toSource) {
                        var tc = { name: prop, js: context[prop].toSource()};
                        self.vm.testCases.push(tc);
                    }

                }
                if (context[prop] && context[prop].prototype) {
                    self.setupContextBreakdown(context[prop].prototype, base + '.' + prop + '.prototype');
                }
            }
        };

        self.benchmarkSuite.on('cycle', function (event) {
            var b = event.target;

            var bm = new bVM();
            bm.name(b.name);
            bm.expression(b.name.replace(/context\.(.*?)\(\)\;/gi, '$1'));
            bm.hz(b.hz.toFixed(0));
            bm.relativateMarginError(b.stats.rme.toFixed(2) + '%');
            bm.iterationPerSampleCycle(b.count);
            bm.numAnalysisCycles(b.cycles);
            bm.numSampleCycles(b.stats.sample.length);

            self.vm.benchmarks.push(bm);
        })
            .on('complete', function () {

                self.vm.benchmarks.sort(function (left, right) {
                    var leftHz = parseInt(left.hz());
                    var rightHz = parseInt(right.hz());
                    return leftHz == rightHz ? 0 : (leftHz > rightHz ? -1 : 1)
                });
                self.vm.benchmarks()[0].fastest(true);
                var length = self.benchmarks().length;
                self.vm.benchmarks()[length - 1].slowest(true);
                var slowestHz = self.vm.benchmarks()[length - 1].hz();
                for (var i = 0; i < length; i++) {
                    self.vm.benchmarks()[i].timesFaster((self.vm.benchmarks()[i].hz() / slowestHz).toFixed(3));
                }
                self.vm.benchmarksDone(true);
            });

        self.add = function(shouldEqual, func){
            if(typeof func == 'function'){
                self.addTestWithBenchmarks(shouldEqual, func, null);
            }  
            else{
                var c = self.jsContext;
                var realFunc = new Function("c","return c." + func)
                self.addTestWithBenchmarks(shouldEqual, realFunc, null);
            }

            return self;
        }

        self.addTestWithBenchmarks = function (shouldEqual, func, name) {
            var test = new Test(shouldEqual, func, self.jsContext, name);
            self.vm.tests.push(test);

            if(name){
                var fn = (function(context,name) { return function() { context[name]();}; })(self.jsContext, name);
                self.benchmarkSuite.add({ 
                    'name' : test.expression,
                    'fn': fn, 
                    'async': true, 
                    'queued': true, 
                    'minSamples': 100});
            }
            else{
                self.benchmarkSuite.add(test.expression, function () { func(self.jsContext);}, 
                    { 'async': true, 'queued': true, 'minSamples': 100});
            }
            
            return self;
        };

        self.shouldEqual = function (shouldEqual) {
            self.shouldEqualValue = shouldEqual;
            return self;
        };

        self.compare = function () {
            var func = function (c, tc) { return c[tc]();};
            for (var testcase in self.jsContext) {
                self.addTestWithBenchmarks(self.shouldEqualValue, func, testcase);
            }
            return self;
        };

        self.run = function () {
            self.vm.benchmarksDone(false);
            self.vm.benchmarks.removeAll();
            self.benchmarkSuite.run();
        };


    };
    return suite;
});
