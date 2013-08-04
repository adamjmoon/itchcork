require(['arrayMocha'], function (c) {
    var context = new c();
    describe('arrayMocha', function () {
        describe('#indexOf()', function () {
            it('should return -1 when the value is not present', function () {
                context.arr.indexOf(5).should.equal(-1);
                context.arr.indexOf(0).should.equal(-1);
                context.arr.indexOf(1).should.equal(0);
            });
        });
    });
});
require(['primitivetypes'], function (c) {
    var context = new c();
    describe('primitivetypes', function () {
        describe('stringPrimitiveValue', function () {
            it("typeof should equal 'string'", function () {
                (typeof context.stringPrimitiveValue).should.equal("string");
            });
        });
    });
});