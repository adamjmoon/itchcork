define(function() {
  'use strict';
  var context = function c() {
    this.arr = [1, 2, 3];
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
      Shape.prototype.move = function(x, y) {
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
               
      Cube.prototype.move = function(z) {
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
