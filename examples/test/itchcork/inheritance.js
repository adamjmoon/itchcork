require(['inheritance', 'ItchCork'], function (c, ic) {
      var suite = new ic.Suite('Prototypal JS Inheritance', c);
      
      suite
      .it(function(c) {return c.someAnimal.toString();}).shouldBe('[Mammal "Mr. Biggles"]')
      .it(function(c) {return c.myPet.toString();}).shouldBe('[Cat "Felix"]')
      .it(function(c) {c.myPet.haveABaby(); return c.myPet.offspring[0].toString();}).shouldBe('[Cat "Baby Felix"]')
      .benchmark();
       
       window.suiteView.add(suite);
 });
