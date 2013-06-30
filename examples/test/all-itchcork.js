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

require(['primitivetypes', 'ItchCork'], function (c, ic) {
    var suite = new ic.Suite('Javascript Primitive Values and Types', c);
    suite.add("number", function (c) {
            return typeof c.numberPrimitiveValue;
        })
        .add("function", function (c) {
            return typeof Number;
        })
        .add("string", function (c) {
            return typeof c.stringPrimitiveValue;
        })
        .add("function", function (c) {
            return typeof String;
        })
        .add("boolean", function (c) {
            return typeof c.booleanPrimitiveValue;
        })
        .add("number", function (c) {
            return typeof c.numberPrimitiveValue;
        })
        .add("string", function (c) {
            return typeof c.stringPrimitiveValue;
        })
        .add("boolean", function (c) {
            return typeof c.booleanPrimitiveValue;
        })
        .add("object", function (c) {
            return typeof c.nullPrimitiveValue;
        })
        .add("undefined", function (c) {
            return typeof c.undefinedPrimitiveValue;
        })
        .add("undefined", function (c) {
            return typeof c.notDefined;
        })
        .run();

    window.suiteView.add(suite);
});

require(['array','ItchCork'], function (c, ic) {
   var suite = new ic.Suite('Fastest method of convert array-like to actual arrays', c);
   suite.shouldEqual(1).compare().run();
   window.suiteView.add(suite);
});

require(['datetime', 'ItchCork'], function (c, ic) {
    var suite = new ic.Suite('DateTime tests', c);
    suite.shouldEqual(1)
        .compare()
        .run();

    window.suiteView.add(suite);
});

require(['knockoutVSangular', 'ItchCork'], function (c, ic) {
    var suite = new ic.Suite('knockout VS angular', c);
    suite.add("Angular 10", function (c) {
            c.ANGclear();
            for (var i = 0; i < 10; i++) {
                c.ANGpush();
            }
        })
        .add("Knockout 10", function (c) {
            c.KOclear();
            for (var i = 0; i < 10; i++) {
                c.KOpush();
            }
        })
        .add("Angular 100", function (c) {
            c.ANGclear();
            for (var i = 0; i < 100; i++) {
                c.ANGpush();
            }
        })
        .add("Knockout 100", function (c) {
            c.KOclear();
            for (var i = 0; i < 100; i++) {
                c.KOpush();
            }
        })
        .add("Angular 500", function (c) {
            c.ANGclear();
            for (var i = 0; i < 500; i++) {
                c.ANGpush();
            }
        })
        .add("Knockout 500", function (c) {
            c.KOclear();
            for (var i = 0; i < 500; i++) {
                c.KOpush();
            }
        })
        .add("Angular 1000", function (c) {
            c.ANGclear();
            for (var i = 0; i < 1000; i++) {
                c.ANGpush();
            }
        })
        .add("Knockout 1000", function (c) {
            c.KOclear();
            for (var i = 0; i < 1000; i++) {
                c.KOpush();
            }
        })
        .run();

    window.suiteView.add(suite);
});
