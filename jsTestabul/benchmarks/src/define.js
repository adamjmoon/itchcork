define(function() {
  'use strict';
   console.log('a')
   var a = function() {
       this.propA = 1;
   }

   a.prototype.propB = 2;

   a.prototype.add = function(){
     return this.propB + this.propA;
   };

   return a;


});