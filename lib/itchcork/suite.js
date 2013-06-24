define("Suite", ['Test', 'benchmark', 'SuiteViewModel', 'BenchmarkViewModel'], function (Test, Benchmark, sVM, bVM) {
    function suite(desc, js) {
        "use strict";
        var self = this;
        self.vm, self.num = 0, self.passedCount = 0, self.failedCount = 0, self.jsContext, self.benchmarkSuite = new Benchmark.Suite;
        self.themeManager = window.ThemeManager;

        self.highlight = function (js) {
            return js
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\/\/(.*)/gm, '<span class="badge badge-inverse">//$1</span>')
                .replace(/\#(.*)/gm, '<span class="badge badge-inverse">#$1</span>')
                .replace(/('.*?')/gm, '<span class="string">$1</span>')
                .replace(/\bnew *(\w+)/gm, '<span class="keyword">new</span> <span class="init">$1</span>')
                .replace(/(function|new|throw|return|var|if|else|prototype|Object|\-\>|@|::|this)/gim, '<span class="keyword">$1</span>')
        };
        self.setupContextBreakdown = function (context, base) {
            var jsStr = '', coffeeStr = '';

            for (var prop in context) {
                if (context[prop] instanceof Function) {
                    jsStr = context[prop].toString();
                    try {
                        coffeeStr = Js2coffee.build(jsStr);
                        var tc = { name: base.replace(/context/g, 'c') + '.' + prop, jsStr: self.highlight(jsStr), coffeeStr: self.highlight(coffeeStr)};
                        self.vm.testCases.push(tc);
                    } catch (err) {
                        var tc = { name: base.replace(/context/g, 'c') + '.' + prop, jsStr: self.highlight(jsStr), coffeeStr: ''};
                        self.vm.testCases.push(tc);
                    }

                } else if (context[prop] instanceof Object) {
                    var tc = { name: 'c.' + prop, jsStr: Object.toSource ? context[prop].toSource() : 'is instanceof Object', coffeeStr: ''};
                    self.vm.testCases.push(tc);
                }
                if (context[prop] && context[prop].prototype) {
                    self.setupContextBreakdown(context[prop].prototype, base + '.' + prop + '.prototype');
                }
            }
        };


        self.map = function () {
            self.vm = new sVM();
            self.vm.suiteDesc(desc);
            self.vm.jsContextStr(js.toString() + "\n var c = new context();");
            self.vm.coffeeContextStr(self.highlight(Js2coffee.build(self.vm.jsContextStr())));
            self.vm.jsContextStr(self.highlight(self.vm.jsContextStr()));
            self.vm.benchmarkPlatform(Benchmark.platform.description);
            self.jsContext = new js();
            self.setupContextBreakdown(self.jsContext, 'context');
        };

        self.map();

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
                var length = self.vm.benchmarks().length;
                self.vm.benchmarks()[length - 1].slowest(true);
                var slowestHz = self.vm.benchmarks()[length - 1].hz();
                for (var i = 0; i < length; i++) {
                    self.vm.benchmarks()[i].timesFaster((self.vm.benchmarks()[i].hz() / slowestHz).toFixed(3));
                }
                self.vm.benchmarksDone(true);
            });

        self.add = function (shouldEqual, func) {
            if (typeof func == 'function') {
                self.addTestWithBenchmarks(shouldEqual, func, null);
            }
            else {
                var c = self.jsContext;
                var realFunc = new Function("c", "return c." + func)
                self.addTestWithBenchmarks(shouldEqual, realFunc, null);
            }

            return self;
        }

        self.addTestWithBenchmarks = function (shouldEqual, func, name) {
            var test = new Test(shouldEqual, func, self.jsContext, name);
            if (test.passed) {
                self.passedCount++;
            } else {
                self.failedCount++;
            }
            self.vm.tests.push(test);

            if (name) {
                var fn = (function (context, name) {
                    return function () {
                        context[name]();
                    };
                })(self.jsContext, name);
                self.benchmarkSuite.add({
                    'name': test.expression,
                    'fn': fn,
                    'async': true,
                    'queued': true,
                    'minSamples': 100});
            }
            else {
                self.benchmarkSuite.add(test.expression, function () {
                        func(self.jsContext);
                    },
                    { 'async': true, 'queued': true, 'minSamples': 100});
            }

            return self;
        };

        self.shouldEqual = function (shouldEqual) {
            self.shouldEqualValue = shouldEqual;
            return self;
        };

        self.compare = function () {
            var func = function (c, tc) {
                return c[tc]();
            };
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
