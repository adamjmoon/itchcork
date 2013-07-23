require(['knockoutBenchmarks', 'ItchCork'], function (c, ic) {
    var suite = new ic.Suite('Knockout JS Benchmarks', c);
    suite
        .add(10, function (c) {
            c.KOclear();
            for (var i = 0; i < 10; i++) {
                c.KOpush();
            }
            return c.KOData().length;
        })
        .add(100, function (c) {
            c.KOclear();
            for (var i = 0; i < 100; i++) {
                c.KOpush();
            }
            return c.KOData().length;
        })
        .add(500, function (c) {
            c.KOclear();
            for (var i = 0; i < 500; i++) {
                c.KOpush();
            }
            return c.KOData().length;
        })
        .add(1000, function (c) {
            c.KOclear();
            for (var i = 0; i < 1000; i++) {
                c.KOpush();
            }
            return c.KOData().length;
        })
        .run();

    window.suiteView.add(suite);
});
