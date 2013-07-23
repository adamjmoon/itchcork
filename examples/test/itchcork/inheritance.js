require(['inheritance', 'ItchCork'], function (c, ic) {
      var suite = new ic.Suite('Prototypal JS Inheritance', c);
      
      suite
      .add('[Mammal "Mr. Biggles"]', function(c) {return c.someAnimal.toString();})
      .add('[Cat "Felix"]', function(c) {return c.myPet.toString();})
      .add('[Cat "Baby Felix"]', function(c) {c.myPet.haveABaby(); return c.myPet.offspring[0].toString();});
       
       window.suiteView.add(suite);
 });
