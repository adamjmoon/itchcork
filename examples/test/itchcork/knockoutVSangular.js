require(['knockoutVSangular', 'ItchCork'], function (c, ic) {
    var suite = new ic.Suite('knockout VS angular', c);
    suite.add("Angular 10","", function (c) {
            c.ANGclear();
            for (var i = 0; i < 10; i++) {
                c.ANGpush();
            }
            return c.ang_scope.data;
        })
        .add("Knockout 10","", function (c) {
            c.KOclear();
            for (var i = 0; i < 10; i++) {
                c.KOpush();
            }
            return c.KOData();
        })
        .add("Angular 100","", function (c) {
            c.ANGclear();
            for (var i = 0; i < 100; i++) {
                c.ANGpush();
            }
            return c.ang_scope.data;
        })
        .add("Knockout 100","", function (c) {
            c.KOclear();
            for (var i = 0; i < 100; i++) {
                c.KOpush();
            }
            return c.KOData();
        })
        .add("Angular 500","", function (c) {
            c.ANGclear();
            for (var i = 0; i < 500; i++) {
                c.ANGpush();
            }
            return c.ang_scope.data;
        })
        .add("Knockout 500","", function (c) {
            c.KOclear();
            for (var i = 0; i < 500; i++) {
                c.KOpush();
            }
            return c.KOData();
        })
        .add("Angular 1000","", function (c) {
            c.ANGclear();
            for (var i = 0; i < 1000; i++) {
                c.ANGpush();
            }
            return c.ang_scope.data;
        })
        .add("Knockout 1000","", function (c) {
            c.KOclear();
            for (var i = 0; i < 1000; i++) {
                c.KOpush();
            }
            return c.KOData();
        })
        .run();

    window.suiteView.add(suite);
});
