define(['ItchCork', 'context'], function (fs, context) {
    return function () {
        var fs = new fs();
        var suite = new fs.Suite('DateTime tests', context);
        suite.shouldEqual(1)
            .compare(function (c, tc) {
                return c[tc]();
            })
            .run();
    };
});
