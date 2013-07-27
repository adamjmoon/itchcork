require(['objectcreate', 'ItchCork'], function (c, ic) {
      var suite = new ic.Suite('Classical inheritance with Object.create vs CROCKFORD Object.Create', c);
      
      suite.it(function(c) {return c.rectangle instanceof c.Rectangle;}).shouldBe(true)
           .it(function(c) {return c.rectangle instanceof c.Shape;}).shouldBe(true)
           .it(function(c) {return c.rectangle2 instanceof c.Rectangle2;}).shouldBe(true)
           .it(function(c) {return c.rectangle2 instanceof c.Rectangle;}).shouldBe(false)
           .it(function(c) {return c.rectangle2 instanceof c.Shape;}).shouldBe(true)
           .it(function(c) {return c.cube instanceof c.Cube;}).shouldBe(true)
           .it(function(c) {return c.cube instanceof c.Shape;}).shouldBe(true)
           .it(function(c) {return typeof c.Rectangle;}).shouldBe('function')
           .it(function(c) {return typeof c.Rectangle2;}).shouldBe('function')
           .it(function(c) {return c.rectangle.x;}).shouldBe(1)
           .it(function(c) {return c.rectangle.y;}).shouldBe(1)
           .it(function(c) {return c.rectangle2.x;}).shouldBe(1)
           .it(function(c) {return c.rectangle2.y;}).shouldBe(1)
           .it(function(c) {return c.shape.x;}).shouldBe(1)
           .it(function(c) {return c.shape.y;}).shouldBe(1)
           .it(function(c) {return typeof c.rectangle;}).shouldBe('object')
           .it(function(c) {return c.rectangle.move(1);}).shouldBe('Shape moved.')
           .it(function(c) {return c.rectangle2.move(1);}).shouldBe('Shape moved.')
           .it(function(c) {return c.cube.move(1,1);}).shouldBe('Cube grew in 3 dimensions.')
           .it(function(c) {c.cube.move(1,1); return c.cube.x;}).shouldBe(2)
           .it(function(c) {c.cube.move(1,1); return c.cube.y;}).shouldBe(2)
           .it(function(c) {c.cube.move(1,1); return c.cube.z;}).shouldBe(2)
           .it(function(c) {return c.cube.move(1);}).shouldBe('Cube grew in 3 dimensions.')
           .it(function(c) {return c.cube.x;}).shouldBe(3)
           .it(function(c) {return c.cube.y;}).shouldBe(3)
           .it(function(c) {return c.cube.z;}).shouldBe(3)
           .it(function(c) {return c.rectangle.x;}).shouldBe(2)
           .it(function(c) {return c.rectangle.y;}).shouldBe(2)
           .it(function(c) {return c.rectangle2.x;}).shouldBe(2)
           .it(function(c) {return c.rectangle2.y;}).shouldBe(2)
           .it(function(c) {return c.shape.x;}).shouldBe(1)
           .it(function(c) {return c.shape.y;}).shouldBe(1)
           .benchmark();
 });
