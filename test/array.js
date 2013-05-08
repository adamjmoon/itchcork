define('array',['ItchCork', 'context'], function (fs, context) {
    return function () {
        var fs = new fs();
        var suite = new fs.Suite('Fastest method of convert array-like to actual arrays', context);
        suite.shouldEqual(1).compare(function(c, tc){return c[tc]();}).run();
    };
});