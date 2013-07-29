define("inheritance", function(){
  function context(){
  
    function Mammal(name){
      this.name=name;
      this.offspring=[];
    };
    Mammal.prototype.haveABaby=function haveABaby(){
      var newBaby=new this.constructor("Baby "+this.name);
      this.offspring.push(newBaby);
    	return newBaby;
    }; 
    Mammal.prototype.toString=function toString(){
    	return '[Mammal "'+this.name+'"]';
    }; 
    
    Cat.prototype = Mammal.prototype;        // Here's where the inheritance occurs
    Cat.prototype.constructor=Cat;       // Otherwise instances of Cat would have a constructor of Mammal
  
    function Cat(name){
      this.name=name;
    } 
    
    Cat.prototype.toString=function toString(){
      return '[Cat "'+this.name+'"]';
    };

    this.Cat = Cat;
    this.Mammal = Mammal;
    this.someAnimal = new this.Mammal('Mr. Biggles');
    this.myPet = new this.Cat('Felix');
  }
  
  return context;
});
