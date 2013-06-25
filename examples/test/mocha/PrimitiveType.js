require(['primitivetypes'], function (c) {
    var context = new c();
    describe('primitiveTypes', function () {
        describe('stringPrimitiveValue', function () {
            it("typeof should equal 'string'", function () {
                (typeof context.stringPrimitiveValue).should.equal("string");
            });
        });
    });
});