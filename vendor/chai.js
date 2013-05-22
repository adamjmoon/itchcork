!function(name,definition){if(typeof define=="function"&&typeof define.amd=="object"){define(definition)}else{this[name]=definition()}}("chai",function(){function require(p){var path=require.resolve(p),mod=require.modules[path];if(!mod){throw new Error('failed to require "'+p+'"')}if(!mod.exports){mod.exports={};mod.call(mod.exports,mod,mod.exports,require.relative(path))}return mod.exports}require.modules={};require.resolve=function(path){var orig=path,reg=path+".js",index=path+"/index.js";return require.modules[reg]&&reg||require.modules[index]&&index||orig};require.register=function(path,fn){require.modules[path]=fn};require.relative=function(parent){return function(p){if("."!=p[0]){return require(p)}var path=parent.split("/"),segs=p.split("/");path.pop();for(var i=0;i<segs.length;i++){var seg=segs[i];if(".."==seg){path.pop()}else{if("."!=seg){path.push(seg)}}}return require(path.join("/"))}};require.register("assertion.js",function(module,exports,require){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;
/*!
 * Module dependencies.
 */
;var AssertionError=require("./browser/error"),toString=Object.prototype.toString,util=require("./utils"),flag=util.flag;
/*!
 * Module export.
 */
;module.exports=Assertion;
/*!
 * Assertion Constructor
 *
 * Creates object for chaining.
 *
 * @api private
 */
;function Assertion(obj,msg,stack){flag(this,"ssfi",stack||arguments.callee);flag(this,"object",obj);flag(this,"message",msg)}
/*!
  * ### Assertion.includeStack
  *
  * User configurable property, influences whether stack trace
  * is included in Assertion error message. Default of false
  * suppresses stack trace in the error message
  *
  *     Assertion.includeStack = true;  // enable stack on error
  *
  * @api public
  */
;Assertion.includeStack=false;Assertion.addProperty=function(name,fn){util.addProperty(this.prototype,name,fn)};Assertion.addMethod=function(name,fn){util.addMethod(this.prototype,name,fn)};Assertion.addChainableMethod=function(name,fn,chainingBehavior){util.addChainableMethod(this.prototype,name,fn,chainingBehavior)};Assertion.overwriteProperty=function(name,fn){util.overwriteProperty(this.prototype,name,fn)};Assertion.overwriteMethod=function(name,fn){util.overwriteMethod(this.prototype,name,fn)};
/*!
 * ### .assert(expression, message, negateMessage, expected, actual)
 *
 * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
 *
 * @name assert
 * @param {Philosophical} expression to be tested
 * @param {String} message to display if fails
 * @param {String} negatedMessage to display if negated expression fails
 * @param {Mixed} expected value (remember to check for negation)
 * @param {Mixed} actual (optional) will default to `this.obj`
 * @api private
 */
;Assertion.prototype.assert=function(expr,msg,negateMsg,expected,_actual){var msg=util.getMessage(this,arguments),actual=util.getActual(this,arguments),ok=util.test(this,arguments);if(!ok){throw new AssertionError({message:msg,actual:actual,expected:expected,stackStartFunction:(Assertion.includeStack)?this.assert:flag(this,"ssfi")})}};
/*!
 *
 * ### ._obj
 *
 * Quick reference to stored `actual` value for plugin developers.
 *
 * @api private
 */
;Object.defineProperty(Assertion.prototype,"_obj",{get:function(){return flag(this,"object")},set:function(val){flag(this,"object",val)}});["to","be","been","is","and","have","with"].forEach(function(chain){Object.defineProperty(Assertion.prototype,chain,{get:function(){return this},configurable:true})});Object.defineProperty(Assertion.prototype,"not",{get:function(){flag(this,"negate",true);return this},configurable:true});Object.defineProperty(Assertion.prototype,"deep",{get:function(){flag(this,"deep",true);return this},configurable:true});function an(type){var obj=flag(this,"object"),klassStart=type.charAt(0).toUpperCase(),klass=klassStart+type.slice(1),article=~["A","E","I","O","U"].indexOf(klassStart)?"an ":"a ";this.assert("[object "+klass+"]"===toString.call(obj),"expected #{this} to be "+article+type,"expected #{this} not to be "+article+type,"[object "+klass+"]",toString.call(obj))}Assertion.addChainableMethod("an",an);Assertion.addChainableMethod("a",an);function includeChainingBehavior(){flag(this,"contains",true)}function include(val){var obj=flag(this,"object");this.assert(~obj.indexOf(val),"expected #{this} to include "+util.inspect(val),"expected #{this} to not include "+util.inspect(val))}Assertion.addChainableMethod("include",include,includeChainingBehavior);Assertion.addChainableMethod("contain",include,includeChainingBehavior);Object.defineProperty(Assertion.prototype,"ok",{get:function(){this.assert(flag(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy");return this},configurable:true});Object.defineProperty(Assertion.prototype,"true",{get:function(){this.assert(true===flag(this,"object"),"expected #{this} to be true","expected #{this} to be false",this.negate?false:true);return this},configurable:true});Object.defineProperty(Assertion.prototype,"false",{get:function(){this.assert(false===flag(this,"object"),"expected #{this} to be false","expected #{this} to be true",this.negate?true:false);return this},configurable:true});Object.defineProperty(Assertion.prototype,"null",{get:function(){this.assert(null===flag(this,"object"),"expected #{this} to be null","expected #{this} not to be null",this.negate?false:true);return this},configurable:true});Object.defineProperty(Assertion.prototype,"undefined",{get:function(){this.assert(undefined===flag(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined",this.negate?false:true);return this},configurable:true});Object.defineProperty(Assertion.prototype,"exist",{get:function(){this.assert(null!=flag(this,"object"),"expected #{this} to exist","expected #{this} to not exist");return this},configurable:true});Object.defineProperty(Assertion.prototype,"empty",{get:function(){var obj=flag(this,"object"),expected=obj;if(Array.isArray(obj)||"string"===typeof object){expected=obj.length}else{if(typeof obj==="object"){expected=Object.keys(obj).length}}this.assert(!expected,"expected #{this} to be empty","expected #{this} not to be empty");return this},configurable:true});function checkArguments(){var obj=flag(this,"object"),type=Object.prototype.toString.call(obj);this.assert("[object Arguments]"===type,"expected #{this} to be arguments but got "+type,"expected #{this} to not be arguments")}Assertion.addProperty("arguments",checkArguments);Assertion.addProperty("Arguments",checkArguments);Assertion.prototype.equal=function(val){var obj=flag(this,"object");if(flag(this,"deep")){return this.eql(val)}else{this.assert(val===obj,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",val)}return this};Assertion.prototype.eql=function(obj){this.assert(util.eql(obj,flag(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",obj);return this};Assertion.prototype.above=function(val){this.assert(flag(this,"object")>val,"expected #{this} to be above "+val,"expected #{this} to be below "+val);return this};Assertion.prototype.below=function(val){this.assert(flag(this,"object")<val,"expected #{this} to be below "+val,"expected #{this} to be above "+val);return this};Assertion.prototype.within=function(start,finish){var obj=flag(this,"object"),range=start+".."+finish;this.assert(obj>=start&&obj<=finish,"expected #{this} to be within "+range,"expected #{this} to not be within "+range);return this};Assertion.prototype.instanceOf=function(constructor){var name=util.getName(constructor);this.assert(flag(this,"object") instanceof constructor,"expected #{this} to be an instance of "+name,"expected #{this} to not be an instance of "+name);return this};Assertion.prototype.property=function(name,val){var obj=flag(this,"object"),value=flag(this,"deep")?util.getPathValue(name,obj):obj[name],descriptor=flag(this,"deep")?"deep property ":"property ",negate=flag(this,"negate");if(negate&&undefined!==val){if(undefined===value){throw new Error(util.inspect(obj)+" has no "+descriptor+util.inspect(name))}}else{this.assert(undefined!==value,"expected #{this} to have a "+descriptor+util.inspect(name),"expected #{this} to not have "+descriptor+util.inspect(name))}if(undefined!==val){this.assert(val===value,"expected #{this} to have a "+descriptor+util.inspect(name)+" of #{exp}, but got #{act}","expected #{this} to not have a "+descriptor+util.inspect(name)+" of #{act}",val,value)}flag(this,"object",value);return this};Assertion.prototype.ownProperty=function(name){var obj=flag(this,"object");this.assert(obj.hasOwnProperty(name),"expected #{this} to have own property "+util.inspect(name),"expected #{this} to not have own property "+util.inspect(name));return this};Assertion.prototype.length=function(n){var obj=flag(this,"object");new Assertion(obj).to.have.property("length");var len=obj.length;this.assert(len==n,"expected #{this} to have a length of #{exp} but got #{act}","expected #{this} to not have a length of #{act}",n,len);return this};Assertion.prototype.match=function(re){var obj=flag(this,"object");this.assert(re.exec(obj),"expected #{this} to match "+re,"expected #{this} not to match "+re);return this};Assertion.prototype.string=function(str){var obj=flag(this,"object");new Assertion(obj).is.a("string");this.assert(~obj.indexOf(str),"expected #{this} to contain "+util.inspect(str),"expected #{this} to not contain "+util.inspect(str));return this};Assertion.prototype.keys=function(keys){var obj=flag(this,"object"),str,ok=true;keys=keys instanceof Array?keys:Array.prototype.slice.call(arguments);if(!keys.length){throw new Error("keys required")}var actual=Object.keys(obj),len=keys.length;ok=keys.every(function(key){return ~actual.indexOf(key)});if(!flag(this,"negate")&&!flag(this,"contains")){ok=ok&&keys.length==actual.length}if(len>1){keys=keys.map(function(key){return util.inspect(key)});var last=keys.pop();str=keys.join(", ")+", and "+last}else{str=util.inspect(keys[0])}str=(len>1?"keys ":"key ")+str;str=(flag(this,"contains")?"contain ":"have ")+str;this.assert(ok,"expected #{this} to "+str,"expected #{this} to not "+str,keys,Object.keys(obj));return this};Assertion.prototype.Throw=function(constructor,msg){var obj=flag(this,"object");new Assertion(obj).is.a("function");var thrown=false,desiredError=null,name=null;if(arguments.length===0){msg=null;constructor=null}else{if(constructor&&(constructor instanceof RegExp||"string"===typeof constructor)){msg=constructor;constructor=null}else{if(constructor&&constructor instanceof Error){desiredError=constructor;constructor=null;msg=null}else{if(typeof constructor==="function"){name=(new constructor()).name}else{constructor=null}}}}try{obj()}catch(err){if(desiredError){this.assert(err===desiredError,"expected #{this} to throw "+util.inspect(desiredError)+" but "+util.inspect(err)+" was thrown","expected #{this} to not throw "+util.inspect(desiredError));return this}if(constructor){this.assert(err instanceof constructor,"expected #{this} to throw "+name+" but a "+err.name+" was thrown","expected #{this} to not throw "+name);if(!msg){return this}}if(err.message&&msg&&msg instanceof RegExp){this.assert(msg.exec(err.message),"expected #{this} to throw error matching "+msg+" but got "+util.inspect(err.message),"expected #{this} to throw error not matching "+msg);return this}else{if(err.message&&msg&&"string"===typeof msg){this.assert(~err.message.indexOf(msg),"expected #{this} to throw error including #{exp} but got #{act}","expected #{this} to throw error not including #{act}",msg,err.message);return this}else{thrown=true}}}var expectedThrown=name?name:desiredError?util.inspect(desiredError):"an error";this.assert(thrown===true,"expected #{this} to throw "+expectedThrown,"expected #{this} to not throw "+expectedThrown);return this};Assertion.prototype.respondTo=function(method){var obj=flag(this,"object"),itself=flag(this,"itself"),context=("function"===typeof obj&&!itself)?obj.prototype[method]:obj[method];this.assert("function"===typeof context,"expected #{this} to respond to "+util.inspect(method),"expected #{this} to not respond to "+util.inspect(method),"function",typeof context);return this};Object.defineProperty(Assertion.prototype,"itself",{get:function(){flag(this,"itself",true);return this},configurable:true});Assertion.prototype.satisfy=function(matcher){var obj=flag(this,"object");this.assert(matcher(obj),"expected #{this} to satisfy "+util.inspect(matcher),"expected #{this} to not satisfy"+util.inspect(matcher),this.negate?false:true,matcher(obj));return this};Assertion.prototype.closeTo=function(expected,delta){var obj=flag(this,"object");this.assert((obj-delta===expected)||(obj+delta===expected),"expected #{this} to be close to "+expected+" +/- "+delta,"expected #{this} not to be close to "+expected+" +/- "+delta);return this};
/*!
 * Aliases.
 */
(function alias(name,as){Assertion.prototype[as]=Assertion.prototype[name];return alias})("equal","eq")("above","gt")("below","lt")("length","lengthOf")("keys","key")("ownProperty","haveOwnProperty")("above","greaterThan")("below","lessThan")("Throw","throws")("Throw","throw")("instanceOf","instanceof")});require.register("browser/error.js",function(module,exports,require){
/*!
 * chai
 * Copyright(c) 2011-2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;module.exports=AssertionError;function AssertionError(options){options=options||{};this.message=options.message;this.actual=options.actual;this.expected=options.expected;this.operator=options.operator;if(options.stackStartFunction&&Error.captureStackTrace){var stackStartFunction=options.stackStartFunction;Error.captureStackTrace(this,stackStartFunction)}}AssertionError.prototype=Object.create(Error.prototype);AssertionError.prototype.name="AssertionError";AssertionError.prototype.constructor=AssertionError;AssertionError.prototype.toString=function(){return this.message}});require.register("chai.js",function(module,exports,require){
/*!
 * chai
 * Copyright(c) 2011-2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;var used=[],exports=module.exports={};
/*!
 * Chai version
 */
;exports.version="1.0.4";
/*!
 * Primary `Assertion` prototype
 */
;exports.Assertion=require("./assertion");
/*!
 * Assertion Error
 */
;exports.AssertionError=require("./browser/error");
/*!
 * Utils for plugins (not exported)
 */
;var util=require("./utils");exports.use=function(fn){if(!~used.indexOf(fn)){fn(this,util);used.push(fn)}return this};
/*!
 * Expect interface
 */
;var expect=require("./interface/expect");exports.use(expect);
/*!
 * Should interface
 */
;var should=require("./interface/should");exports.use(should);
/*!
 * Assert interface
 */
;var assert=require("./interface/assert");exports.use(assert)});require.register("interface/assert.js",function(module,exports,require){
/*!
 * chai
 * Copyright(c) 2011-2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;module.exports=function(chai,util){
/*!
   * Chai dependencies.
   */
;var Assertion=chai.Assertion,flag=util.flag;
/*!
   * Module export.
   */
;var assert=chai.assert=function(express,errmsg){var test=new Assertion(null);test.assert(express,errmsg,"[ negation message unavailable ]")};assert.fail=function(actual,expected,message,operator){throw new chai.AssertionError({actual:actual,expected:expected,message:message,operator:operator,stackStartFunction:assert.fail})};assert.ok=function(val,msg){new Assertion(val,msg).is.ok};assert.equal=function(act,exp,msg){var test=new Assertion(act,msg);test.assert(exp==flag(test,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",exp,act)};assert.notEqual=function(act,exp,msg){var test=new Assertion(act,msg);test.assert(exp!=flag(test,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",exp,act)};assert.strictEqual=function(act,exp,msg){new Assertion(act,msg).to.equal(exp)};assert.notStrictEqual=function(act,exp,msg){new Assertion(act,msg).to.not.equal(exp)};assert.deepEqual=function(act,exp,msg){new Assertion(act,msg).to.eql(exp)};assert.notDeepEqual=function(act,exp,msg){new Assertion(act,msg).to.not.eql(exp)};assert.isTrue=function(val,msg){new Assertion(val,msg).is["true"]};assert.isFalse=function(val,msg){new Assertion(val,msg).is["false"]};assert.isNull=function(val,msg){new Assertion(val,msg).to.equal(null)};assert.isNotNull=function(val,msg){new Assertion(val,msg).to.not.equal(null)};assert.isUndefined=function(val,msg){new Assertion(val,msg).to.equal(undefined)};assert.isDefined=function(val,msg){new Assertion(val,msg).to.not.equal(undefined)};assert.isFunction=function(val,msg){new Assertion(val,msg).to.be.a("function")};assert.isNotFunction=function(val,msg){new Assertion(val,msg).to.not.be.a("function")};assert.isObject=function(val,msg){new Assertion(val,msg).to.be.a("object")};assert.isNotObject=function(val,msg){new Assertion(val,msg).to.not.be.a("object")};assert.isArray=function(val,msg){new Assertion(val,msg).to.be.an("array")};assert.isNotArray=function(val,msg){new Assertion(val,msg).to.not.be.an("array")};assert.isString=function(val,msg){new Assertion(val,msg).to.be.a("string")};assert.isNotString=function(val,msg){new Assertion(val,msg).to.not.be.a("string")};assert.isNumber=function(val,msg){new Assertion(val,msg).to.be.a("number")};assert.isNotNumber=function(val,msg){new Assertion(val,msg).to.not.be.a("number")};assert.isBoolean=function(val,msg){new Assertion(val,msg).to.be.a("boolean")};assert.isNotBoolean=function(val,msg){new Assertion(val,msg).to.not.be.a("boolean")};assert.typeOf=function(val,type,msg){new Assertion(val,msg).to.be.a(type)};assert.notTypeOf=function(val,type,msg){new Assertion(val,msg).to.not.be.a(type)};assert.instanceOf=function(val,type,msg){new Assertion(val,msg).to.be.instanceOf(type)};assert.notInstanceOf=function(val,type,msg){new Assertion(val,msg).to.not.be.instanceOf(type)};assert.include=function(exp,inc,msg){var obj=new Assertion(exp,msg);if(Array.isArray(exp)){obj.to.include(inc)}else{if("string"===typeof exp){obj.to.contain.string(inc)}}};assert.match=function(exp,re,msg){new Assertion(exp,msg).to.match(re)};assert.notMatch=function(exp,re,msg){new Assertion(exp,msg).to.not.match(re)};assert.property=function(obj,prop,msg){new Assertion(obj,msg).to.have.property(prop)};assert.notProperty=function(obj,prop,msg){new Assertion(obj,msg).to.not.have.property(prop)};assert.deepProperty=function(obj,prop,msg){new Assertion(obj,msg).to.have.deep.property(prop)};assert.notDeepProperty=function(obj,prop,msg){new Assertion(obj,msg).to.not.have.deep.property(prop)};assert.propertyVal=function(obj,prop,val,msg){new Assertion(obj,msg).to.have.property(prop,val)};assert.propertyNotVal=function(obj,prop,val,msg){new Assertion(obj,msg).to.not.have.property(prop,val)};assert.deepPropertyVal=function(obj,prop,val,msg){new Assertion(obj,msg).to.have.deep.property(prop,val)};assert.deepPropertyNotVal=function(obj,prop,val,msg){new Assertion(obj,msg).to.not.have.deep.property(prop,val)};assert.lengthOf=function(exp,len,msg){new Assertion(exp,msg).to.have.length(len)};assert.Throw=function(fn,type,msg){if("string"===typeof type){msg=type;type=null}new Assertion(fn,msg).to.Throw(type)};assert.doesNotThrow=function(fn,type,msg){if("string"===typeof type){msg=type;type=null}new Assertion(fn,msg).to.not.Throw(type)};assert.operator=function(val,operator,val2,msg){if(!~["==","===",">",">=","<","<=","!=","!=="].indexOf(operator)){throw new Error('Invalid operator "'+operator+'"')}var test=new Assertion(eval(val+operator+val2),msg);test.assert(true===flag(test,"object"),"expected "+util.inspect(val)+" to be "+operator+" "+util.inspect(val2),"expected "+util.inspect(val)+" to not be "+operator+" "+util.inspect(val2))};
/*!
   * Undocumented / untested
   */
;assert.ifError=function(val,msg){new Assertion(val,msg).to.not.be.ok};
/*!
   * Aliases.
   */
(function alias(name,as){assert[as]=assert[name];return alias})("Throw","throw")("Throw","throws")}});require.register("interface/expect.js",function(module,exports,require){
/*!
 * chai
 * Copyright(c) 2011-2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;module.exports=function(chai,util){chai.expect=function(val,message){return new chai.Assertion(val,message)}}});require.register("interface/should.js",function(module,exports,require){
/*!
 * chai
 * Copyright(c) 2011-2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;module.exports=function(chai,util){var Assertion=chai.Assertion;function loadShould(){Object.defineProperty(Object.prototype,"should",{set:function(){},get:function(){if(this instanceof String||this instanceof Number){return new Assertion(this.constructor(this))}else{if(this instanceof Boolean){return new Assertion(this==true)}}return new Assertion(this)},configurable:true});var should={};should.equal=function(val1,val2){new Assertion(val1).to.equal(val2)};should.Throw=function(fn,errt,errs){new Assertion(fn).to.Throw(errt,errs)};should.exist=function(val){new Assertion(val).to.exist};should.not={};should.not.equal=function(val1,val2){new Assertion(val1).to.not.equal(val2)};should.not.Throw=function(fn,errt,errs){new Assertion(fn).to.not.Throw(errt,errs)};should.not.exist=function(val){new Assertion(val).to.not.exist};should["throw"]=should.Throw;should.not["throw"]=should.not.Throw;return should}chai.should=loadShould;chai.Should=loadShould}});require.register("utils/addChainableMethod.js",function(module,exports,require){
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;
/*!
 * Module dependencies
 */
;var transferFlags=require("./transferFlags");module.exports=function(ctx,name,method,chainingBehavior){if(typeof chainingBehavior!=="function"){chainingBehavior=function(){}}Object.defineProperty(ctx,name,{get:function(){chainingBehavior.call(this);var assert=function(){var result=method.apply(this,arguments);return result===undefined?this:result};var asserterNames=Object.getOwnPropertyNames(ctx);asserterNames.forEach(function(asserterName){var pd=Object.getOwnPropertyDescriptor(ctx,asserterName),functionProtoPD=Object.getOwnPropertyDescriptor(Function.prototype,asserterName);if(functionProtoPD&&!functionProtoPD.configurable){return}if(asserterName==="arguments"){return}Object.defineProperty(assert,asserterName,pd)});transferFlags(this,assert);return assert},configurable:true})}});require.register("utils/addMethod.js",function(module,exports,require){
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;module.exports=function(ctx,name,method){ctx[name]=function(){var result=method.apply(this,arguments);return result===undefined?this:result}}});require.register("utils/addProperty.js",function(module,exports,require){
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;module.exports=function(ctx,name,getter){Object.defineProperty(ctx,name,{get:function(){var result=getter.call(this);return result===undefined?this:result},configurable:true})}});require.register("utils/eql.js",function(module,exports,require){module.exports=_deepEqual;if(!Buffer){var Buffer={isBuffer:function(){return false}}}function _deepEqual(actual,expected){if(actual===expected){return true}else{if(Buffer.isBuffer(actual)&&Buffer.isBuffer(expected)){if(actual.length!=expected.length){return false}for(var i=0;i<actual.length;i++){if(actual[i]!==expected[i]){return false}}return true}else{if(actual instanceof Date&&expected instanceof Date){return actual.getTime()===expected.getTime()}else{if(typeof actual!="object"&&typeof expected!="object"){return actual===expected}else{return objEquiv(actual,expected)}}}}}function isUndefinedOrNull(value){return value===null||value===undefined}function isArguments(object){return Object.prototype.toString.call(object)=="[object Arguments]"}function objEquiv(a,b){if(isUndefinedOrNull(a)||isUndefinedOrNull(b)){return false}if(a.prototype!==b.prototype){return false}if(isArguments(a)){if(!isArguments(b)){return false}a=pSlice.call(a);b=pSlice.call(b);return _deepEqual(a,b)}try{var ka=Object.keys(a),kb=Object.keys(b),key,i}catch(e){return false}if(ka.length!=kb.length){return false}ka.sort();kb.sort();for(i=ka.length-1;i>=0;i--){if(ka[i]!=kb[i]){return false}}for(i=ka.length-1;i>=0;i--){key=ka[i];if(!_deepEqual(a[key],b[key])){return false}}return true}});require.register("utils/flag.js",function(module,exports,require){
/*!
 * Chai - flag utility
 * Copyright(c) 2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;module.exports=function(obj,key,value){var flags=obj.__flags||(obj.__flags=Object.create(null));if(arguments.length===3){flags[key]=value}else{return flags[key]}}});require.register("utils/getActual.js",function(module,exports,require){
/*!
 * Chai - getActual utility
 * Copyright(c) 2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;module.exports=function(obj,args){var actual=args[4];return"undefined"!==actual?actual:obj.obj}});require.register("utils/getMessage.js",function(module,exports,require){
/*!
 * Chai - message composition utility
 * Copyright(c) 2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;
/*!
 * Module dependancies
 */
;var flag=require("./flag"),getActual=require("./getActual"),inspect=require("./inspect");module.exports=function(obj,args){var negate=flag(obj,"negate"),val=flag(obj,"object"),expected=args[3],actual=getActual(obj,args),msg=negate?args[2]:args[1],flagMsg=flag(obj,"message");msg=msg||"";msg=msg.replace(/#{this}/g,inspect(val)).replace(/#{act}/g,inspect(actual)).replace(/#{exp}/g,inspect(expected));return flagMsg?flagMsg+": "+msg:msg}});require.register("utils/getName.js",function(module,exports,require){
/*!
 * Chai - getName utility
 * Copyright(c) 2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;module.exports=function(func){if(func.name){return func.name}var match=/^\s?function ([^(]*)\(/.exec(func);return match&&match[1]?match[1]:""}});require.register("utils/getPathValue.js",function(module,exports,require){
/*!
 * Chai - getPathValue utility
 * Copyright(c) 2012 Jake Luer <jake@alogicalparadox.com>
 * @see https://github.com/logicalparadox/filtr
 * MIT Licensed
 */
;var getPathValue=module.exports=function(path,obj){var parsed=parsePath(path);return _getPathValue(parsed,obj)};
/*!
 * ## parsePath(path)
 *
 * Helper function used to parse string object
 * paths. Use in conjunction with `_getPathValue`.
 *
 *      var parsed = parsePath('myobject.property.subprop');
 *
 * ### Paths:
 *
 * * Can be as near infinitely deep and nested
 * * Arrays are also valid using the formal `myobject.document[3].property`.
 *
 * @param {String} path
 * @returns {Object} parsed
 * @api private
 */
;function parsePath(path){var parts=path.split(".").filter(Boolean);return parts.map(function(value){var re=/([A-Za-z0-9]+)\[(\d+)\]$/,mArr=re.exec(value),val;if(mArr){val={p:mArr[1],i:parseFloat(mArr[2])}}return val||value})}
/*!
 * ## _getPathValue(parsed, obj)
 *
 * Helper companion function for `.parsePath` that returns
 * the value located at the parsed address.
 *
 *      var value = getPathValue(parsed, obj);
 *
 * @param {Object} parsed definition from `parsePath`.
 * @param {Object} object to search against
 * @returns {Object|Undefined} value
 * @api private
 */
;function _getPathValue(parsed,obj){var tmp=obj,res;for(var i=0,l=parsed.length;i<l;i++){var part=parsed[i];if(tmp){if("object"===typeof part&&tmp[part.p]){tmp=tmp[part.p][part.i]}else{tmp=tmp[part]}if(i==(l-1)){res=tmp}}else{res=undefined}}return res}});require.register("utils/index.js",function(module,exports,require){
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;
/*!
 * Main exports
 */
;var exports=module.exports={};
/*!
 * test utility
 */
;exports.test=require("./test");
/*!
 * message utility
 */
;exports.getMessage=require("./getMessage");
/*!
 * actual utility
 */
;exports.getActual=require("./getActual");
/*!
 * Inspect util
 */
;exports.inspect=require("./inspect");
/*!
 * Flag utility
 */
;exports.flag=require("./flag");
/*!
 * Flag transferring utility
 */
;exports.transferFlags=require("./transferFlags");
/*!
 * Deep equal utility
 */
;exports.eql=require("./eql");
/*!
 * Deep path value
 */
;exports.getPathValue=require("./getPathValue");
/*!
 * Function name
 */
;exports.getName=require("./getName");
/*!
 * add Property
 */
;exports.addProperty=require("./addProperty");
/*!
 * add Method
 */
;exports.addMethod=require("./addMethod");
/*!
 * overwrite Property
 */
;exports.overwriteProperty=require("./overwriteProperty");
/*!
 * overwrite Method
 */
;exports.overwriteMethod=require("./overwriteMethod");
/*!
 * Add a chainable method
 */
;exports.addChainableMethod=require("./addChainableMethod")});require.register("utils/inspect.js",function(module,exports,require){var getName=require("./getName");module.exports=inspect;function inspect(obj,showHidden,depth,colors){var ctx={showHidden:showHidden,seen:[],stylize:function(str){return str}};return formatValue(ctx,obj,(typeof depth==="undefined"?2:depth))}function formatValue(ctx,value,recurseTimes){if(value&&typeof value.inspect==="function"&&value.inspect!==exports.inspect&&!(value.constructor&&value.constructor.prototype===value)){return value.inspect(recurseTimes)}var primitive=formatPrimitive(ctx,value);if(primitive){return primitive}var visibleKeys=Object.keys(value);var keys=ctx.showHidden?Object.getOwnPropertyNames(value):visibleKeys;if(keys.length===0||(isError(value)&&((keys.length===1&&keys[0]==="stack")||(keys.length===2&&keys[0]==="description"&&keys[1]==="stack")))){if(typeof value==="function"){var name=getName(value);var nameSuffix=name?": "+name:"";return ctx.stylize("[Function"+nameSuffix+"]","special")}if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),"regexp")}if(isDate(value)){return ctx.stylize(Date.prototype.toUTCString.call(value),"date")}if(isError(value)){return formatError(value)}}var base="",array=false,braces=["{","}"];if(isArray(value)){array=true;braces=["[","]"]}if(typeof value==="function"){var n=value.name?": "+value.name:"";base=" [Function"+n+"]"}if(isRegExp(value)){base=" "+RegExp.prototype.toString.call(value)}if(isDate(value)){base=" "+Date.prototype.toUTCString.call(value)}if(isError(value)){return formatError(value)}if(keys.length===0&&(!array||value.length==0)){return braces[0]+base+braces[1]}if(recurseTimes<0){if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),"regexp")}else{return ctx.stylize("[Object]","special")}}ctx.seen.push(value);var output;if(array){output=formatArray(ctx,value,recurseTimes,visibleKeys,keys)}else{output=keys.map(function(key){return formatProperty(ctx,value,recurseTimes,visibleKeys,key,array)})}ctx.seen.pop();return reduceToSingleString(output,base,braces)}function formatPrimitive(ctx,value){switch(typeof value){case"undefined":return ctx.stylize("undefined","undefined");case"string":var simple="'"+JSON.stringify(value).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return ctx.stylize(simple,"string");case"number":return ctx.stylize(""+value,"number");case"boolean":return ctx.stylize(""+value,"boolean")}if(value===null){return ctx.stylize("null","null")}}function formatError(value){return"["+Error.prototype.toString.call(value)+"]"}function formatArray(ctx,value,recurseTimes,visibleKeys,keys){var output=[];for(var i=0,l=value.length;i<l;++i){if(Object.prototype.hasOwnProperty.call(value,String(i))){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,String(i),true))}else{output.push("")}}keys.forEach(function(key){if(!key.match(/^\d+$/)){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,key,true))}});return output}function formatProperty(ctx,value,recurseTimes,visibleKeys,key,array){var name,str;if(value.__lookupGetter__){if(value.__lookupGetter__(key)){if(value.__lookupSetter__(key)){str=ctx.stylize("[Getter/Setter]","special")}else{str=ctx.stylize("[Getter]","special")}}else{if(value.__lookupSetter__(key)){str=ctx.stylize("[Setter]","special")}}}if(visibleKeys.indexOf(key)<0){name="["+key+"]"}if(!str){if(ctx.seen.indexOf(value[key])<0){if(recurseTimes===null){str=formatValue(ctx,value[key],null)}else{str=formatValue(ctx,value[key],recurseTimes-1)}if(str.indexOf("\n")>-1){if(array){str=str.split("\n").map(function(line){return"  "+line}).join("\n").substr(2)}else{str="\n"+str.split("\n").map(function(line){return"   "+line}).join("\n")}}}else{str=ctx.stylize("[Circular]","special")}}if(typeof name==="undefined"){if(array&&key.match(/^\d+$/)){return str}name=JSON.stringify(""+key);if(name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){name=name.substr(1,name.length-2);name=ctx.stylize(name,"name")}else{name=name.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");name=ctx.stylize(name,"string")}}return name+": "+str}function reduceToSingleString(output,base,braces){var numLinesEst=0;var length=output.reduce(function(prev,cur){numLinesEst++;if(cur.indexOf("\n")>=0){numLinesEst++}return prev+cur.length+1},0);if(length>60){return braces[0]+(base===""?"":base+"\n ")+" "+output.join(",\n  ")+" "+braces[1]}return braces[0]+base+" "+output.join(", ")+" "+braces[1]}function isArray(ar){return Array.isArray(ar)||(typeof ar==="object"&&objectToString(ar)==="[object Array]")}function isRegExp(re){return typeof re==="object"&&objectToString(re)==="[object RegExp]"}function isDate(d){return typeof d==="object"&&objectToString(d)==="[object Date]"}function isError(e){return typeof e==="object"&&objectToString(e)==="[object Error]"}function objectToString(o){return Object.prototype.toString.call(o)}});require.register("utils/overwriteMethod.js",function(module,exports,require){
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;module.exports=function(ctx,name,method){var _method=ctx[name],_super=function(){return this};if(_method&&"function"===typeof _method){_super=_method}ctx[name]=function(){var result=method(_super).apply(this,arguments);return result===undefined?this:result}}});require.register("utils/overwriteProperty.js",function(module,exports,require){
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;module.exports=function(ctx,name,getter){var _get=Object.getOwnPropertyDescriptor(ctx,name),_super=function(){};if(_get&&"function"===typeof _get.get){_super=_get.get}Object.defineProperty(ctx,name,{get:function(){var result=getter(_super).call(this);return result===undefined?this:result},configurable:true})}});require.register("utils/test.js",function(module,exports,require){
/*!
 * Chai - test utility
 * Copyright(c) 2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;
/*!
 * Module dependancies
 */
;var flag=require("./flag");module.exports=function(obj,args){var negate=flag(obj,"negate"),expr=args[0];return negate?!expr:expr}});require.register("utils/transferFlags.js",function(module,exports,require){
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
;module.exports=function(assertion,object,includeAll){var flags=assertion.__flags||(assertion.__flags=Object.create(null));if(!object.__flags){object.__flags=Object.create(null)}includeAll=arguments.length===3?includeAll:true;for(var flag in flags){if(includeAll||(flag!=="object"&&flag!=="ssfi"&&flag!="message")){object.__flags[flag]=flags[flag]}}}});return require("chai")});