define(['context'], function (context) {
    return function (itchcork) {       
      var suite = new itchcork.Suite('Javascript Primitive Values and Types', context);
      suite
       .add("number", function(c) {return typeof c.numberPrimitiveValue;})
       .add("string", function(c) {return typeof c.numberStringValue;})
       .add("boolean", function(c) {return typeof c.booleanPrimitiveValue;})
       .add("object", function(c) {return typeof c.nullPrimitiveValue;})
       .add("undefined", function(c) {return typeof c.undefinedPrimitiveValue;})       
       .run();
 };
});
