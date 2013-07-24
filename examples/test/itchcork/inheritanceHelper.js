require(['inheritanceHelper', 'ItchCork'], function (c, ic) {
      var suite = new ic.Suite('Prototypal JS Inheritance with Helper InheritFrom Method', c);
      
      suite
      .it(function(c) {return c.felix.toString();}).shouldBe('[Cat "Felix"]')
      .it(function(c) {return c.kitten.toString();}).shouldBe('[Cat "Baby Felix"]')
      .benchmark();
       
       window.suiteView.add(suite);
 });
