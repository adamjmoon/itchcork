define("Test", [], function () {

    var test = function (shouldEqual, func, context, testName) {
        'use strict';
        var expressionStr = func.toString().trim(), self=this;
        this.passed=false;
        if (testName) {
            this.expression = testName + '()';
            this.actual = func(context, testName);

        } else {
            this.expression = expressionStr.replace(/\n/gm, '')
                .replace(/function +?\(c\) +?\{+?return(.*?)\;+?\}/g,'$1')
                .replace(/function +?\(c\) +?\{ +?return(.*?)\; +?\}/g,'$1');


            this.actual = func(context);
        }
        this.shouldEqual = shouldEqual;

        this.typeOf = typeof(this.actual);
        this.passed = this.shouldEqual===this.actual;
    };

    return test;
});
