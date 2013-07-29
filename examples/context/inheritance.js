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
    
    Cat.prototype = new this.Mammal();        // Here's where the inheritance occurs
    Cat.prototype.constructor=this.Cat;       // Otherwise instances of Cat would have a constructor of Mammal
  
    function Cat(name){
      this.name=name;
    } 
    
    Cat.prototype.toString=function toString(){
      return '[Cat "'+this.name+'"]';
    };

    this.Cat = Cat;
    this.someAnimal = new this.Mammal('Mr. Biggles');
    this.myPet = new this.Cat('Felix');
  }
  
  return context;
});
