/**
 * almond 0.2.5 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that "directory" and not name of the baseName's
                //module. For instance, baseName of "one/two/three", maps to
                //"one/two/three.js", but we want the directory, "one/two" for
                //this normalization.
                baseParts = baseParts.slice(0, baseParts.length - 1);

                name = baseParts.concat(name.split("/"));

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            return req.apply(undef, aps.call(arguments, 0).concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (typeof callback === 'function') {

            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                    hasProp(waiting, depName) ||
                    hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback.apply(defined[name], args);

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                    cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        config = cfg;
        if (config.deps) {
            req(config.deps, config.callback);
        }
        return req;
    };

    define = function (name, deps, callback) {

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());
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
                        coffeeStr = Js2coffee.build(jsStr);
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
var testcase = '';
if (window.location.pathname && window.location.pathname.length > 1)
    testcase = window.location.pathname.split('/')[1];
else if (window.location.hash && window.location.hash.length > 1)
    testcase = window.location.hash.split('#')[1];
else
    testcase = 'datetime';

var root = 'raw.github.com/adamjmoon/itchcork/master/';
requirejs.config({
    baseUrl: 'https://',
    paths: {
        'themeManager': root + 'themeManager',
        'bootstrap': 'netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min',
        'underscore': 'cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
        'coffeescript': root + 'vendor/coffee/coffeescript.min',
        'js2coffee': root + 'vendor/coffee/js2coffee',
        'ItchCork': root + 'itchcork.min',
        'lodash': root + 'vendor/aa.lodash.min',
        'mocha': root + 'vendor/mocha',
        'sinonM': root + 'vendor/sinon',
        'chai': root + 'vendor/chai',
        'sinon-chai': root + 'vendor/sinon-chai',
        'platform': root + 'vendor/platform',
        'benchmark': root + 'vendor/benchmark',
        'knockout': 'ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1',
        'context': root + 'examples/context/' + testcase,
        'suite': root + 'examples/test/' + testcase
    }
});
require(['themeManager', 'underscore', 'knockout', 'bootstrap'], function () {
    $("#topNav").show();
    $('div.frame').show();
    require(['coffeescript', 'platform', 'benchmark', 'sinonM'], function (CoffeeScript) {
        this.CoffeeScript = CoffeeScript;
        require(['js2coffee'], function () {
            require(['ItchCork'], function (itchcork) {
                var unitTestFrameworkManager = new itchcork.UnitTestFrameworkManager();
                if (unitTestFrameworkManager.init() === "itchcork") {
                    require(['suite'], function (suite) {
                        var suiteView = new itchcork.SuiteView();
                        suiteView.add(suite);
                    });
                }
                else {
                    define('sinon', [], function () {
                        return sinon;
                    });
                    require(['chai', 'sinon', 'sinon-chai', 'mocha'], function (chai, sinon, sinonChai) {
                        chai.use(sinonChai);
                        var assert = chai.assert;
                        var should = chai.should();
                        mocha.setup('bdd');
                        mocha.reporter('html');
                        require(['suite'], function (suite) {
                            var runner = mocha.run();
                            runner.on('end', function () {
                                var suites = $("ul#mocha-report li.suite ul");
                                $("#collapse").click(function () {
                                    $(suites).each(function (index, element) {
                                        element.hidden = true;
                                    });
                                    $("#collapse").hide();
                                    $("#expand").show();
                                });
                                $("#expand").click(function () {
                                    $(suites).each(function (index, element) {
                                        element.hidden = false;
                                    });
                                    $("#expand").hide();
                                    $("#collapse").show();
                                });
                            });
                        });
                    });
                }
            });
        });
    });
});