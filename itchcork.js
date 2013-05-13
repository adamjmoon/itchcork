define("Suite", ['Test', 'benchmark', 'knockout', 'ThemeManager'], function (Test, Benchmark, ko, th) {
    return function (desc, js) {
        var self = this;
        self.suiteDesc = ko.observable(desc);
        self.jsContext = new js();
        self.jsContextStr = ko.observable(js.toString());
        self.coffeeContextStr = ko.observable(Js2coffee.build(js.toString()));
        self.tests = ko.observableArray([]);
        self.testCases = ko.observableArray([]);
        self.shouldShow = ko.observable(true);
        self.benchmarks = ko.observableArray([]);
        self.benchmarksDone = ko.observable(false);
        self.benchmarkSuite = new Benchmark.Suite;
        self.benchmarkPlatform = ko.observable(Benchmark.platform.description);
        self.themeManager = new th();
        self.themeManager.init();

        setupContextBreakdown(self.jsContext, 'context');
        function setupContextBreakdown(context, base) {
            var jsStr='', coffeeStr='';

            for (var prop in context) {
                if (context[prop] instanceof Function) {
                    try {
                        jsStr = context[prop].toString();
                        coffeeStr = Js2coffee.build('var func = ' + jsStr);
                        var tc = { name: base + '.' + prop, jsStr: jsStr, coffeeStr: coffeeStr};
                        self.testCases.push(tc);
                    } catch (err) {

                    }

                } else if (context[prop] instanceof Object) {
                    if (Object.toSource) {
                        var tc = { name: prop, js: context[prop].toSource()};
                        self.testCases.push(tc);
                    }

                }
                if (context[prop] && context[prop].prototype) {
                    setupContextBreakdown(context[prop].prototype, base + '.' + prop + '.prototype');
                }
            }
        }

        self.benchmarkSuite.on('cycle', function (event) {
            var b = event.target;

            self.benchmarks.push({
                name: b.name,
                expression: ko.observable(b.name.replace(/context\.(.*?)\(\)\;/gi, '$1')),
                hz: ko.observable(b.hz.toFixed(0)),
                relativateMarginError: ko.observable(b.stats.rme.toFixed(2) + '%'),
                timesFaster: ko.observable('pending...'),
                slowest: ko.observable(false),
                fastest: ko.observable(false),
                iterationPerSampleCycle: ko.observable(b.count),
                numAnalysisCycles: ko.observable(b.cycles),
                numSampleCycles: ko.observable(b.stats.sample.length)
            });
        })
            .on('complete', function () {

                self.benchmarks.sort(function (left, right) {
                    var leftHz = parseInt(left.hz());
                    var rightHz = parseInt(right.hz());
                    return leftHz == rightHz ? 0 : (leftHz > rightHz ? -1 : 1)
                });
                self.benchmarks()[0].fastest(true);
                var length = self.benchmarks().length;
                self.benchmarks()[length - 1].slowest(true);
                var slowestHz = self.benchmarks()[length - 1].hz();
                for (var i = 0; i < length; i++) {
                    self.benchmarks()[i].timesFaster((self.benchmarks()[i].hz() / slowestHz).toFixed(3));
                }
                self.benchmarksDone(true);
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
            self.tests.push(test);

            if(name){
                var benchmarkFunc = function () { self.jsContext[name];}
                console.log(benchmarkFunc.toString());
                console.log(benchmarkFunc());
                self.benchmarkSuite.add(test.expression, function () {
                console.log(expression);
                console.log(name);
                expression(self.jsContext, name);
            }, 
                    { 'async': true, 'queued': true, 'minSamples': 100});
            }
            else{
                self.benchmarkSuite.add(test.expression, function () { func(self.jsContext);}, 
                    { 'async': true, 'qu=]ued': true, 'minSamples': 100});
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
            self.benchmarksDone(false);
            self.benchmarks.removeAll();
            self.benchmarkSuite.run();

        };

        ko.applyBindings(self);
    };
});

define("Test", [], function() {
  return function(shouldEqual, func, context, testName) {
    
    var expressionStr = func.toString().trim();  
    
    if(testName){     
          this.expression =  testName + '()';
          this.actual = func(context,testName);
          
    } else{
      this.expression = expressionStr.replace(/\n    /,'')
                   .replace(/{ return/,'{return')
             .replace(/function \(c\) {return /,'')
             .replace(/c\./gi,'context.')            
             .replace(/\}/,'');
      this.expression = this.expression.replace(/context\./g,'')
               .replace(/\;/,'');
      this.actual = func(context);
    }
    
    this.shouldEqual = shouldEqual; 
  this.typeOf = typeof(this.actual);
  };
});
define("Spy", [], function() {
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
define("ThemeManager", [], function () {
    return function ThemeManager() {
        ThemeManager.prototype.init = function () {
            apply();
        }

        function apply() {
            var currentThemeStyle = document.getElementById(amplify.store('currentTheme'));
            currentThemeStyle.innerHTML = currentThemeStyle.innerHTML.replace(/\/\*/g, "").replace(/\*\//g, "");
            if (amplify.store('previousTheme') != '') {
                var previousThemeStyle = document.getElementById(amplify.store('previousTheme'));
                previousThemeStyle.innerHTML = '/*' + previousThemeStyle.innerHTML + '*/';
            }
        }

        ThemeManager.prototype.set = function (newTheme) {
            if (newTheme != amplify.store('currentTheme')) {
                amplify.store('previousTheme', amplify.store('currentTheme'));
                amplify.store('currentTheme', newTheme);
                apply();
            }
        };
    };
});
define("ItchCork", ['Suite', 'Test', 'Spy', 'Verify', 'ThemeManager'], function(Suite, Test, Spy, Verify, ThemeManager) {
  return function ItchCork() {
      ItchCork.prototype.Suite = Suite;
      ItchCork.prototype.Test = Test;
      ItchCork.prototype.Spy = Spy;
      ItchCork.prototype.Verify = Verify;
      ItchCork.prototype.ThemeManager = ThemeManager;
  };
});