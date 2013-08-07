require(['arrayMocha'], function (c) {
    var context = new c();
    describe('arrayMocha', function () {
        describe('#indexOf()', function () {
            it('should return -1 when the value is not present ', function () {
                return context.arr.indexOf(5).should.equal(-1);
            });
            it('should return 0 valued index when the value is present', function () {
                return context.arr.indexOf(1).should.equal(0);
            });

        });
    });
});