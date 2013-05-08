define(function() {
  return function context() {
   var my_array = [0,1,2,3,4,5,6,7,8,9];
   var s=0,f=0;

   function myMethod(){
        return my_array.length;
    };

   this.slow = function() {
        for(var i = 0; i < my_array.length; i++){};
        for(var i = 0; i < myMethod(); i++){};
        s=s+1;
        return s;
      };

   this.fast = function() {
    var length = my_array.length;
    for(var i = 0; i < length; i++){};
    var length = myMethod();
    for(var i = 0; i < length; i++){};
    f=f+1;
    return f;
   };
  };
});
