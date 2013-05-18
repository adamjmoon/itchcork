define("Test", [], function () {

    return function (shouldEqual, func, context, testName) {
        'use strict';
        var expressionStr = func.toString().trim();

        if (testName) {
            this.expression = testName + '()';
            this.actual = func(context, testName);

        } else {
            console.log(expressionStr);
            this.expression = expressionStr.replace(/(\n +?/, '')
                .replace(/function +?\(c\) +?\{ +?return(.*?) +?}/g,'$1');
            this.actual = func(context);
        }

        this.shouldEqual = shouldEqual;
        this.typeOf = typeof(this.actual);
    };
});