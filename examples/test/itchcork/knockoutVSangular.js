require(['knockoutVSangular', 'ItchCork'], function (c, ic) {
    var suite = new ic.Suite('knockout VS angular', c);
    suite.add("", function (c) {
            c.ANGclear();
            for (var i = 0; i < 10; i++) {
                c.ANGpush();
            }
            return c.ang_scope.data;
        })
        .add("", function (c) {
            c.KOclear();
            for (var i = 0; i < 10; i++) {
                c.KOpush();
            }
            return c.KOData();
        })
        .add("", function (c) {
            c.ANGclear();
            for (var i = 0; i < 100; i++) {
                c.ANGpush();
            }
            return c.ang_scope.data;
        })
        .add("", function (c) {
            c.KOclear();
            for (var i = 0; i < 100; i++) {
                c.KOpush();
            }
            return c.KOData();
        })
        .add("", function (c) {
            c.ANGclear();
            for (var i = 0; i < 500; i++) {
                c.ANGpush();
            }
            return c.ang_scope.data;
        })
        .add("", function (c) {
            c.KOclear();
            for (var i = 0; i < 500; i++) {
                c.KOpush();
            }
            return c.KOData();
        })
        .add("", function (c) {
            c.ANGclear();
            for (var i = 0; i < 1000; i++) {
                c.ANGpush();
            }
            return c.ang_scope.data;
        })
        .add("", function (c) {
            c.KOclear();
            for (var i = 0; i < 1000; i++) {
                c.KOpush();
            }
            return c.KOData();
        })
        .run();

    window.suiteView.add(suite);
});
