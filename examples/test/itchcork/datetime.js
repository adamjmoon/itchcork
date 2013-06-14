define(['context', 'ItchCork'], function (c, ic) {

    var suite = new ic.Suite('DateTime tests', c);
    suite.shouldEqual(1)
        .compare()
        .run();

    window.suiteView.add(suite);
});
