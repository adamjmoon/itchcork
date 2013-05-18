define("Test", [], function () {

    return function (shouldEqual, func, context, testName) {
        'use strict';
        var expressionStr = func.toString().trim();

        if (testName) {
            this.expression = testName + '()';
            this.actual = func(context, testName);

        } else {
            this.expression = expressionStr
                .replace(/function +?\(c\) +?\{ +?return +?/g, '')
                .replace(/;/, '');
            this.actual = func(context);
        }

        this.shouldEqual = shouldEqual;
        this.typeOf = typeof(this.actual);
    };
});