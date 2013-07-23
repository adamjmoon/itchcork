define('arrayMocha',function() {
  var context = function context() {
    self = this;
    this.arr = [1, 2, 3];
    this.fun = function fun(){
        self.arr = _.map(self.arr, function(num){ return num * 3; });
    }
  };
  return context;
});

define('objectcreate',function() {
  'use strict';
   function context() {
      //CROCKFORD OBJECT.CREATE
      Object.create2 = function (o) {
          function F() {}
          F.prototype = o;
          return new F();
      };
      function Shape() {
          this.x = 1;
          this.y = 1;          
      };       
      Shape.prototype.move = function move(x, y) {
          this.x += x;
          this.y += y;
          return "Shape moved.";
      };
      function Rectangle(){
          return Shape.call(this);
      };
      function Rectangle2(){
          return Shape.call(this);
      }
      function Cube(x,y,z){
          this.x=x;
          this.y=y; 
          this.z=z; 
      };
      Rectangle.prototype = Object.create(Shape.prototype);
      Rectangle2.prototype = Object.create2(Shape.prototype);
      Cube.prototype = Object.create2(Shape.prototype);
               
      Cube.prototype.move = function move(z) {
          this.x += z;
          this.y += z;
          this.z += z;
          return "Cube grew in 3 dimensions.";
      };
      this.Shape = Shape;
      this.Rectangle = Rectangle;
      this.Rectangle2 = Rectangle2;
      this.Cube = Cube;
      this.shape = new Shape();
      this.rectangle = new Rectangle();
      this.rectangle2 = new Rectangle2();
      this.cube = new Cube(1,1,1);
  }
  
  return context;
});

define('array',function() {
  'use strict';
   function context() {
   var my_array = [0,1,2,3,4,5,6,7,8,9];


   //private method
   function myMethod(){
        return my_array.length;
    };

   //privileged method
   this.slow = function() {
       var s=0;
        for(var i = 0; i < my_array.length; i++){};
        for(var i = 0; i < myMethod(); i++){};
        s=s+1;
        return s;
      };

   //privileged method
   this.fast = function() {
    var f=0;
    var length = my_array.length;
    for(var i = 0; i < length; i++){};
        var length = myMethod();
    for(var i = 0; i < length; i++){};
        f=f+1;
    return f;
   };
  }
  return context;
});

define('datetime',function() {
     'use strict';
     function context() {
         this.currentDateTime1 =
         function() {
             var time = new Date().getTime();
             var date = new Date(time);
             return date.toString('MM/dd/yyyy');
         };

         this.currentDateTime2 =
         function() {
             return new Date().toString('MM/dd/yyyy');
         };
         this.dateFromMilliseconds = function(){
             return new Date(Date(('/Date(1366831535554)/').replace(/\/Date\((.*?)\)\//gi, "$1")).toString()).toLocaleString();
         };

         this.currentDateMillesondsFrom_Midnight_JUNE_1_1970 =
         function() {
             return new Date().getTime().toString();
         };
     }
    return context;
});

define('knockoutBenchmarks', function () {
    'use strict';
    function context() {
        var self = this;
        self.KOData = ko.observable("");
        var KOUpdates1 = ko.observable(0);
        var KOUpdates2 = ko.observable(0);
        
        self.KOData.subscribe(function () {
            KOUpdates1(KOUpdates1() + 1);
        });
        self.KOData.subscribe(function () {
            KOUpdates2(KOUpdates2() + 1);
        });
        
        var KOviewmodel = {data: self.KOData, updates1: KOUpdates1, updates2: KOUpdates2};

        self.KOclear = function () {
            self.KOData("");
        };
        self.KOpush = function () {

            self.KOData(self.KOData() + "o");
        };
    }

    return context;
});


define('primitivetypes',function() {
  'use strict';
   function context() {
     this.numberPrimitiveValue = 1;
     this.stringPrimitiveValue = "string";
     this.booleanPrimitiveValue = true;
     this.nullPrimitiveValue = null;
     this.undefinedPrimiteValue;
  }
  return context;
});
define("inheritance", function(){
  function context(){
  
    this.Mammal = function Mammal(name){ 
      this.name=name;
      this.offspring=[];
    };
    this.Mammal.prototype.haveABaby=function haveABaby(){ 
      var newBaby=new this.constructor("Baby "+this.name);
    	this.offspring.push(newBaby);
    	return newBaby;
    }; 
    this.Mammal.prototype.toString=function toString(){ 
    	return '[Mammal "'+this.name+'"]';
    }; 
    
    this.Cat.prototype = new this.Mammal();        // Here's where the inheritance occurs 
    this.Cat.prototype.constructor=Cat;       // Otherwise instances of Cat would have a constructor of Mammal 
  
    function Cat(name){ 
      this.name=name;
    } 
    
    this.Cat.prototype.toString=function toString(){ 
      return '[Cat "'+this.name+'"]';
    };
    
    this.someAnimal = new Mammal('Mr. Biggles');
    this.myPet = new Cat('Felix');
  }
  
  return context;
});
