define(['context'], function (context) {
    return function (itchcork) {
        var suite = new itchcork.Suite('Javascript Primitive Values and Types', context);
        suite
            .add("number", function (c) {
                return typeof c.numberPrimitiveValue;
            })
            .add("function", function (c) {
                return typeof Number;
            })
            .add("string", function (c) {
                return typeof c.stringPrimitiveValue;
            })
            .add("function", function (c) {
                return typeof String;
            })
            .add("boolean", function (c) {
                return typeof c.booleanPrimitiveValue;
            })
            .add("number", function (c) {
                return typeof c.numberPrimitiveValue;
            })
            .add("string", function (c) {
                return typeof c.stringPrimitiveValue;
            })
            .add("boolean", function (c) {
                return typeof c.booleanPrimitiveValue;
            })
            .add("object", function (c) {
                return typeof c.nullPrimitiveValue;
            })
            .add("undefined", function (c) {
                return typeof c.undefinedPrimitiveValue;
            })
            .add("undefined", function (c) {
                return typeof c.notDefined;
            })
            .run();
    };
});
