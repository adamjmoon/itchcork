require(['objectcreate', 'ItchCork'], function (c, ic) {
      var suite = new ic.Suite('Classical inheritance with Object.create vs CROCKFORD Object.Create', c);
      
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
       
       window.suiteView.add(suite);
 });
