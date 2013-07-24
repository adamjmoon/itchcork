require(['inheritanceHelper', 'ItchCork'], function (c, ic) {
      var suite = new ic.Suite('Prototypal JS Inheritance with Helper InheritFrom Method', c);
      
      suite
      .test(function(c) {return c.felix.toString();}).shouldBe("felix")
      .benchmark();
       
       window.suiteView.add(suite);
 });
