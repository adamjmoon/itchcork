require [ "/benchmarks/src/define.js", "/benchmarks/src/defineCommonJS.js" ] , ( d , common ) ->

  suiteDefine = new ItchCork.Suite( "benchmarks/src/define" , d )
  suiteDefineCommonJS = new ItchCork.Suite( "benchmarks/src/defineCommonJS" , common )

  suiteDefine.it(( c ) ->
    c.propA
  ).shouldBe( 1 ).it(( c ) ->
    c.propB
  ).shouldBe( 2 ).compareBenchmarks()
