define(['context'], function (context) {
    return function (itchcork) {
        var suite = new itchcork.Suite('DateTime tests', context);
        suite.shouldEqual(1)
            .compare(function (c, tc) {
                return c[tc]();
            })
            .run();
    };
});
