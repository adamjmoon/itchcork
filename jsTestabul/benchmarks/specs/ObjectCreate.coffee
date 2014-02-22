require ["benchmarks/src/ObjectCreate"], (c) ->
  suite = new ItchCork.Suite("benchmarks/src/ObjectCreate", c)
  suite.it((c) ->
    c.rectangle instanceof c.Rectangle
  ).shouldBe(true).it((c) ->
    c.rectangle instanceof c.Shape
  ).shouldBe(true).it((c) ->
    c.rectangle2 instanceof c.Rectangle2
  ).shouldBe(true).it((c) ->
    c.rectangle2 instanceof c.Rectangle
  ).shouldBe(false).it((c) ->
    c.rectangle2 instanceof c.Shape
  ).shouldBe(true).it((c) ->
    c.cube instanceof c.Cube
  ).shouldBe(true).it((c) ->
    c.cube instanceof c.Shape
  ).shouldBe(true).it((c) ->
    typeof c.Rectangle
  ).shouldBe("function").it((c) ->
    typeof c.Rectangle2
  ).shouldBe("function").it((c) ->
    c.rectangle.x
  ).shouldBe(1).it((c) ->
    c.rectangle.y
  ).shouldBe(1).it((c) ->
    c.rectangle2.x
  ).shouldBe(1).it((c) ->
    c.rectangle2.y
  ).shouldBe(1).it((c) ->
    c.shape.x
  ).shouldBe(1).it((c) ->
    c.shape.y
  ).shouldBe(1).it((c) ->
    typeof c.rectangle
  ).shouldBe("object").it((c) ->
    c.rectangle.move 1
  ).shouldBe("Shape moved.").it((c) ->
    c.rectangle2.move 1
  ).shouldBe("Shape moved.").it((c) ->
    c.cube.move 1, 1
  ).shouldBe("Cube grew in 3 dimensions.").it((c) ->
    c.cube.move 1, 1
    c.cube.x
  ).shouldBe(2).it((c) ->
    c.cube.move 1, 1
    c.cube.y
  ).shouldBe(2).it((c) ->
    c.cube.move 1, 1
    c.cube.z
  ).shouldBe(2).it((c) ->
    c.cube.move 1
  ).shouldBe("Cube grew in 3 dimensions.").it((c) ->
    c.shape.x
  ).shouldBe(1).it((c) ->
    c.shape.y
  ).shouldBe 1
