define("inheritance", function(){
  function context(){
  
    this.Mammal = function Mammal(name){ 
      this.name=name;
      this.offspring=[];
    };
    this.Mammal.prototype.haveABaby=function haveABaby(){ 
    	var newBaby=new this.constructor("Baby "+this.name);
    	this.offspring.push(newBaby);
    	return newBaby;
    }; 
    this.Mammal.prototype.toString=function toString(){ 
    	return '[Mammal "'+this.name+'"]';
    }; 
    
    this.Cat.prototype = new this.Mammal();        // Here's where the inheritance occurs 
    this.Cat.prototype.constructor=Cat;       // Otherwise instances of Cat would have a constructor of Mammal 
  
    function Cat(name){ 
      this.name=name;
    } 
    
    this.Cat.prototype.toString=function toString(){ 
      return '[Cat "'+this.name+'"]';
    };
    
    this.someAnimal = new Mammal('Mr. Biggles');
    this.myPet = new Cat('Felix');
  }
  
  return context;
});
