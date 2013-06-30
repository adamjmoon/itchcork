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

define('knockoutVSangular',function() {
    'use strict';
    function context() {
        var self = this;
        var Ctrl = function($scope) {
            $scope.data = "";
            $scope.numberofChanges1 = 0;
            $scope.numberofChanges2 = 0;
            $scope.numberofChanges3 = 0;
            $scope.numberofChanges4 = 0;
            $scope.numberofChanges5 = 0;
            $scope.numberofChanges6 = 0;
            $scope.numberofChanges7 = 0;
            $scope.numberofChanges8 = 0;
            $scope.numberofChanges9 = 0;
            $scope.numberofChanges10 = 0;
            $scope.$watch('data', function(a,b,c){
                $scope.numberofChanges1++;
            });
            $scope.$watch('data', function(a,b,c){
                $scope.numberofChanges2++;
            });
            $scope.$watch('data', function(a,b,c){
                $scope.numberofChanges3++;
            });
            $scope.$watch('data', function(a,b,c){
                $scope.numberofChanges4++;
            });
            $scope.$watch('data', function(a,b,c){
                $scope.numberofChanges5++;
            });
            $scope.$watch('data', function(a,b,c){
                $scope.numberofChanges6++;
            });
            $scope.$watch('data', function(a,b,c){
                $scope.numberofChanges7++;
            });
            $scope.$watch('data', function(a,b,c){
                $scope.numberofChanges8++;
            });
            $scope.$watch('data', function(a,b,c){
                $scope.numberofChanges9++;
            });
            $scope.$watch('data', function(a,b,c){
                $scope.numberofChanges10++;
            });
        }

        angular.element(document).ready(function() {
            self.ang_scope = $('#angList').scope();

            self.ANGclear = function() {
                ang_scope.data = "OMGOMGOMG";
            };
            self.ANGpush = function() {
                ang_scope.data += "OMGOMGOMG";
                ang_scope.$apply();
            };
        });

        self.KOData = ko.observable("");
        var KOUpdates1 = ko.observable(0);
        var KOUpdates2 = ko.observable(0);
        var KOUpdates3 = ko.observable(0);
        var KOUpdates4 = ko.observable(0);
        var KOUpdates5 = ko.observable(0);
        var KOUpdates6 = ko.observable(0);
        var KOUpdates7 = ko.observable(0);
        var KOUpdates8 = ko.observable(0);
        var KOUpdates9 = ko.observable(0);
        var KOUpdates10 = ko.observable(0);
        self.KOData.subscribe(function(){
            KOUpdates1(KOUpdates1() + 1);
        });
        self.KOData.subscribe(function(){
            KOUpdates2(KOUpdates2() + 1);
        });
        self.KOData.subscribe(function(){
            KOUpdates3(KOUpdates3() + 1);
        });
        self.KOData.subscribe(function(){
            KOUpdates4(KOUpdates4() + 1);
        });
        self.KOData.subscribe(function(){
            KOUpdates5(KOUpdates5() + 1);
        });
        self.KOData.subscribe(function(){
            KOUpdates6(KOUpdates6() + 1);
        });
        self.KOData.subscribe(function(){
            KOUpdates7(KOUpdates7() + 1);
        });
        self.KOData.subscribe(function(){
            KOUpdates8(KOUpdates8() + 1);
        });
        self.KOData.subscribe(function(){
            KOUpdates9(KOUpdates9() + 1);
        });
        self.KOData.subscribe(function(){
            KOUpdates10(KOUpdates10() + 1);
        });
        var KOviewmodel = {data: self.KOData, updates1: KOUpdates1, updates2: KOUpdates2, updates3: KOUpdates3, updates4: KOUpdates4, updates5: KOUpdates5, updates6: KOUpdates6, updates7: KOUpdates7, updates8: KOUpdates8, updates9: KOUpdates9, updates10: KOUpdates10};

        ko.applyBindings(KOviewmodel, document.getElementById('koapp'));
        self.KOclear = function (){
            self.KOData("");
        };
        self.KOpush = function (){

            self.KOData(self.KOData() + "OMGOMGOMG");
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
