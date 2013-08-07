require(['arrayMocha'], function (c) {

    describe('arrayMocha', function () {
        describe('#indexOf()', function () {
            var context = new c();
            it('should return -1 when the value is not present ', function () {
                return context.arr.indexOf(5).should.equal(-1);
            });
            it('should return 0 valued index when the value is present', function () {
                return context.arr.indexOf(1).should.equal(0);
            });
            it('should return 0 valued index when the value is present', function () {
                return context.arr.indexOf(3).should.equal(2);
            });

        });
        describe('fun() should multiply each value in array by 3', function () {
            var context = new c();
            context.fun();
            it('should return 3 for index 0', function () {
                return context.arr[0].should.equal(3);
            });
            it('should return 6 for index 1', function () {
                return context.arr[1].should.equal(6);
            });
            it('should return 9 for index 2', function () {
                return context.arr[2].should.equal(9);
            });

        });
    });
});