define(['context'], function (c) {
    return function (itchcork) {       
        var suite = new fs.Suite('Fastest method of convert array-like to actual arrays', c);
        suite.shouldEqual(1).compare(function(c, tc){return c[tc]();}).run();
    };
});
