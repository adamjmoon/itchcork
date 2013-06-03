define(['context'], function (c) {
    describe('Array Test', function () {
        describe('#indexOf()', function () {
            it('should return -1 when the value is not present', function () {
                c.arr.indexOf(5).should.equal(-1);
                c.arr.indexOf(0).should.equal(-1);
            });
        });
    });
});