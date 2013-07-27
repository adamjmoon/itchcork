define('inheritanceHelper',function(){
  function context(){
    Function.prototype.inheritsFrom = function( parentClassOrObject ){ 
          if ( parentClassOrObject.constructor == Function )
            {
                //Normal Inheritance
                this.prototype = new parentClassOrObject;
                this.prototype.constructor = this;
                this.prototype.parent = parentClassOrObject.prototype;
            }
            else
            {
                //Pure Virtual Inheritance
                this.prototype = parentClassOrObject;
                this.prototype.constructor = this;
                this.prototype.parent = parentClassOrObject;
            }
            return this;
        };


      function Mammal(name){
          this.name=name;
          this.offspring=[];
          this.beBorn = function(){
              this.alive = true;
          };
      }
      Mammal.prototype.haveABaby=function(){
          this.beBorn.call(this);
          var newBaby = new this.constructor( "Baby " + this.name );
          this.offspring.push(newBaby);
          return newBaby;
      }

      function Cat( name ){
          this.name=name;
      }
      Cat.inheritsFrom( Mammal );
      Cat.prototype.haveABaby=function(){
          var theKitten = this.parent.haveABaby.call(this);
          return theKitten;
      }
      Cat.prototype.toString=function(){
          return '[Cat "'+this.name+'"]';
      }

    this.mammalInstance = new Mammal("Bill");
    this.Mammal = Mammal;
    this.Cat = Cat;
    this.felix = new Cat( "Felix" );
    this.kitten = this.felix.haveABaby();
  }
  
 return context;
});
