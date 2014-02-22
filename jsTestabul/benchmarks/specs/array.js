require(['benchmarks/src/array','ItchCork'], function (c, ic) {
   var suite = new ic.Suite('benchmarks/src/array', c);
   suite.shouldEqual(1)
        .compareBenchmarks();

});
