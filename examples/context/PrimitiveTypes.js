define(function() {
  'use strict';
  var c = function context() {
     this.numberPrimitiveValue = 1;
     this.stringPrimitiveValue = "string";
     this.booleanPrimitiveValue = true;
     this.nullPrimitiveValue = null;
     this.undefinedPrimiteValue;
  };
  return c;
});
