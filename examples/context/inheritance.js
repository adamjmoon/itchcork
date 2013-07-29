define("inheritance", function(){
  function context(){
  
    this.Mammal = function Mammal(name){ 
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
    
    Cat.prototype = new Mammal();        // Here's where the inheritance occurs 
    Cat.prototype.constructor=Cat;       // Otherwise instances of Cat would have a constructor of Mammal 
  
    this.Cat = function Cat(name){ 
      this.name=name;
    } 
    
    Cat.prototype.toString=function toString(){ 
      return '[Cat "'+this.name+'"]';
    };
    
    this.someAnimal = new this.Mammal('Mr. Biggles');
    this.myPet = new this.Cat('Felix');
  }
  
  return context;
});
