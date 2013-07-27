define("Suite", ['Test', 'benchmark', 'SuiteViewModel'], function (Test, Benchmark, sVM) {
    function suite(desc, js, framework) {
        "use strict";
        var self = this;
        self.vm, self.benchmarkingEnabled = true, self.jsContext;
        self.themeManager = window.ThemeManager;
        self.framework = "itchcork";
        if (framework) {
            self.framework = framework;
        }
        self.highlight = function (code) {
            if (self.framework == "itchcork") {
                return code
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/('.*?')/gm, '<span class="string">$1</span>')
                    .replace(/\bnew *(\w+)/gm, '<span class="keyword">new</span> <span class="init">$1</span>')
                    .replace(/(function|new|throw|return|var|if|else|prototype|Object|Array|Boolean|-&gt;|@|::|this)/g, '<span class="keyword">$1</span>');
            } else {
                return code;
            }
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
                if (context[prop] && context[prop].prototype && prop !=="constructor") {
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

            self.jsContext = new js();
            self.setupContextBreakdown(self.jsContext, 'context');
        };

        self.map(desc);


        self.add = function (shouldEqual, func) {
            if (typeof func == 'function') {
                self.addTestWithBenchmarks(shouldEqual, func, null, false);
            }

            return self;
        }

        self.currentTest;

        self.it = function(func, shouldBe){
            self.currentTest = self.addTestWithBenchmarks(shouldBe, func, null, true);

            return self;
        };

        self.shouldBe = function shouldBe(val){
            self.currentTest.shouldEqual = val;
            self.processTest(self.currentTest);
            return self;
        };

        self.processTest = function(test){
            if (test.run()) {
                self.vm.passedCount(self.vm.passedCount() + 1);
            } else {
                self.vm.failedCount(self.vm.failedCount() + 1);
            }
            self.vm.tests.push(test);
        }

        self.addTestWithBenchmarks = function (shouldEqual, func, name, defer) {
            var test = new Test(shouldEqual, func, new js(), name);
            if(!defer){
                self.processTest(test);
            }

            if(self.benchmarkingEnabled){
                if (name) {
                    var fn = (function (context, name) {
                        return function () {
                            context[name]();
                        };
                    })(self.jsContext, name);
                    self.vm.benchmarkSuite.add({
                        'name': test.expression,
                        'fn': fn,
                        'async': true,
                        'queued': true,
                        'minSamples': 100});
                }
                else {
                    self.vm.benchmarkSuite.add(test.expression, function () {
                            func(test.context);
                        },
                        { 'async': true, 'queued': true, 'minSamples': 100});
                }
            }

            return test;
        };

        self.shouldEqual = function (shouldEqual) {
            self.shouldEqualValue = shouldEqual;
            return self;
        };

        self.compareBenchmarks = function () {
            var func = function (c, tc) {
                return c[tc]();
            };
            for (var testcase in self.jsContext) {
                self.addTestWithBenchmarks(self.shouldEqualValue, func, testcase, false);
            }
            self.benchmark();

            return self;
        };

        self.benchmark = function(){

            self.vm.processBenchmarks();
        };

        if(window.suiteView)
            window.suiteView.add(self);
    };
    return suite;
});
