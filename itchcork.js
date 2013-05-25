define("Suite", ['Test', 'benchmark', 'knockout','SuiteViewModel','BenchmarkViewModel'], function (Test, Benchmark, ko, sVM, bVM) {
    var suite =  function (desc, js) {
        "use strict";
        var self = this;
        self.vm,self.jsContext,self.benchmarkSuite = new Benchmark.Suite;self.themeManager = window.ThemeManager;

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

        self.map = function(){
            self.vm = new sVM();
            self.vm.suiteDesc(desc);
            self.vm.jsContextStr(js.toString() + "\n var c = new context();");
            self.vm.coffeeContextStr(Js2coffee.build(self.vm.jsContextStr()));
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

define("SuiteView", ['knockout'], function(ko) {

    var view =  function() {
        var self = this;
        self.suites = new ko.observableArray([]);
        self.menu = document.getElementById('menu');

        ko.applyBindings(self);

        self.add = function(suite){
           self.suites.push(suite);
        }

        self.setTheme = function(theme){
            window.ThemeManager.set(theme);
            $('#logo').click();
            self.menu.setAttribute('height',  (window.innerHeight - 44) + 'px');
        }
    };
    return view;
});

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
define("BenchmarkViewModel", ['knockout'], function(ko) {
  var vm =  function() {
      this.name= ko.observable('');
      this.expression= ko.observable('');
      this.hz= ko.observable(0);
      this.relativateMarginError= ko.observable('');
      this.timesFaster= ko.observable('pending...');
      this.slowest= ko.observable(false);
      this.fastest= ko.observable(false);
      this.iterationPerSampleCycle= ko.observable(0);
      this.numAnalysisCycles= ko.observable(0);
      this.numSampleCycles= ko.observable(0);
  };

  return vm;
});
define("Test", [], function () {

    var test = function (shouldEqual, func, context, testName) {
        'use strict';
        var expressionStr = func.toString().trim();

        if (testName) {
            this.expression = testName + '()';
            this.actual = func(context, testName);

        } else {
            this.expression = expressionStr.replace(/\n/gm, '')
                .replace(/function +?\(c\) +?\{ +?return(.*?) +?;/g,'$1');

            this.actual = func(context);
        }
        this.shouldEqual = shouldEqual;
        this.typeOf = typeof(this.actual);
    };

    return test;
});
define("Spy", [], function() {
    "use strict";
	return function(F) {
		function G() {
			var args = Array.prototype.slice.call(arguments);
			G.calls.push(args);
			F.apply(this, args);
		}

		G.prototype = F.prototype;
		G.calls = [];

		return G;
  };
});
define("Verify", [], function() {
	return function(F) {
        'use strict';
		return function () {
			var args = Array.prototype.slice.call(arguments),
				i,
				j,
				call,
				count = 0,
				matched;

			for (i = 0; i < F.calls.length; i += 1) {
				call = F.calls[i];
				matched = true;
				for (j = 0; j < args.length; j += 1) {
					if (args[j] !== call[j]) {
						matched = false;
						break;
					}
				}
				if (matched) {
					count += 1;
				}
			}

			return count > 0;
		};
	};
});
define("UnitTestFrameworkManager", [], function () {
    return function UnitTestFrameworkManager() {

        UnitTestFrameworkManager.prototype.init = function () {
            if (!amplify.store('currentUnitTestFramework')) {
                this.set('itchcork');
            }
            return this.getFramework();
        }
        UnitTestFrameworkManager.prototype.set = function (framework) {
            if (framework != amplify.store('currentUnitTestFramework')) {
                amplify.store('currentUnitTestFramework', framework);
            }
        };
        UnitTestFrameworkManager.prototype.getFramework = function () {
            return amplify.store('currentUnitTestFramework');
        };
    };
});
define("ItchCork", ['Suite', 'SuiteView', 'Test', 'Spy', 'Verify', 'UnitTestFrameworkManager'], function (Suite, SuiteView, Test, Spy, Verify, UnitTestFrameworkManager) {
    'use strict';
    var ItchCork = function() {

        ItchCork.prototype.Suite = Suite;
        ItchCork.prototype.SuiteView = SuiteView;
        ItchCork.prototype.Test = Test;
        ItchCork.prototype.Spy = Spy;
        ItchCork.prototype.Verify = Verify;
        ItchCork.prototype.UnitTestFrameworkManager = UnitTestFrameworkManager;
    };

    return new ItchCork();
});