require(['knockoutVSangular', 'ItchCork'], function (c, ic) {
    var suite = new ic.Suite('knockout VS angular', c);
    suite.add(10, function (c) {
            c.ANGclear();
            for (var i = 0; i < 10; i++) {
                c.ANGpush();
            }
            return c.ang_scope.data.length;
        })
        .add(10, function (c) {
            c.KOclear();
            for (var i = 0; i < 10; i++) {
                c.KOpush();
            }
            return c.KOData().length;
        })
        .add(100, function (c) {
            c.ANGclear();
            for (var i = 0; i < 100; i++) {
                c.ANGpush();
            }
            return c.ang_scope.data.length;
        })
        .add(100, function (c) {
            c.KOclear();
            for (var i = 0; i < 100; i++) {
                c.KOpush();
            }
            return c.KOData().length;
        })
        .add(500, function (c) {
            c.ANGclear();
            for (var i = 0; i < 500; i++) {
                c.ANGpush();
            }
            return c.ang_scope.data.length;
        })
        .add(500, function (c) {
            c.KOclear();
            for (var i = 0; i < 500; i++) {
                c.KOpush();
            }
            return c.KOData().length;
        })
        .add(1000, function (c) {
            c.ANGclear();
            for (var i = 0; i < 1000; i++) {
                c.ANGpush();
            }
            return c.ang_scope.data.length;
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
