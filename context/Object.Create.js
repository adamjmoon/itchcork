define("context",function() {
  return function context() {
      //CROCKFORD OBJECT.CREATE
      Object.create2 = function (o) {
          function F() {}
          F.prototype = o;
          return new F();
      };
      function Shape() {
          this.x = 1;
          this.y = 1;          
      };       
      Shape.prototype.move = function(x, y) {
          this.x += x;
          this.y += y;
          return "Shape moved.";
      };
      function Rectangle(){
          return Shape.call(this);
      };
      function Rectangle2(){
          return Shape.call(this);
      }
      function Cube(x,y,z){
          this.x=x;
          this.y=y; 
          this.z=z; 
      };
      Rectangle.prototype = Object.create(Shape.prototype);
      Rectangle2.prototype = Object.create2(Shape.prototype);
      Cube.prototype = Object.create2(Shape.prototype);
               
      Cube.prototype.move = function(z) {
          this.x += z;
          this.y += z;
          this.z += z;
          return "Cube grew in 3 dimensions.";
      };
      this.Shape = Shape;
      this.Rectangle = Rectangle;
      this.Rectangle2 = Rectangle2;
      this.Cube = Cube;
      this.shape = new Shape();
      this.rectangle = new Rectangle();
      this.rectangle2 = new Rectangle2();
      this.cube = new Cube(1,1,1);
  };
});


require(['FiddleSticks', 'context'], function(fiddleSticks, context) {
 var suite = new (new fiddleSticks()).Suite('Classical inheritance with Object.create vs CROCKFORD Object.Create', context);
    
  suite.add(true, function(c) {return c.rectangle instanceof c.Rectangle;})
       .add(true, function(c) {return c.rectangle instanceof c.Shape;})
       .add(true, function(c) {return c.rectangle2 instanceof c.Rectangle2;})
       .add(false, function(c) {return c.rectangle2 instanceof c.Rectangle;})
       .add(true, function(c) {return c.rectangle2 instanceof c.Shape;})
       .add(true, function(c) {return c.cube instanceof c.Cube;})
       .add(true, function(c) {return c.cube instanceof c.Shape;})
       .add('function', function(c) {return typeof c.Rectangle;})
       .add('function', function(c) {return typeof c.Rectangle2;})
       .add(1, function(c) {return c.rectangle.x;})
       .add(1, function(c) {return c.rectangle.y;})
       .add(1, function(c) {return c.rectangle2.x;})
       .add(1, function(c) {return c.rectangle2.y;})
       .add(1, function(c) {return c.shape.x;})
       .add(1, function(c) {return c.shape.y;})
       .add('object', function(c) {return typeof c.rectangle;})
       .add('Shape moved.', function(c) {return c.rectangle.move(1, 1);})
       .add('Shape moved.', function(c) {return c.rectangle2.move(1, 1);})
       .add('Cube grew in 3 dimensions.', function(c) {return c.cube.move(1,1);})
       .add(2, function(c) {return c.cube.x;})
       .add(2, function(c) {return c.cube.y;})
       .add(2, function(c) {return c.cube.z;})
       .add('Cube grew in 3 dimensions.', function(c) {return c.cube.move(1);})
       .add(3, function(c) {return c.cube.x;})
       .add(3, function(c) {return c.cube.y;})
       .add(3, function(c) {return c.cube.z;})
       .add(2, function(c) {return c.rectangle.x;})
       .add(2, function(c) {return c.rectangle.y;})
       .add(2, function(c) {return c.rectangle2.x;})
       .add(2, function(c) {return c.rectangle2.y;})       
       .add(1, function(c) {return c.shape.x;})
       .add(1, function(c) {return c.shape.y;})
       .run();
});
