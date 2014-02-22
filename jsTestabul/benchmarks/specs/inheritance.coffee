require ["benchmarks/src/inheritance"], (c) ->
  suite = new ItchCork.Suite("benchmarks/src/inheritance", c)
  context = new c()
  suite.it((c) ->
    c.someAnimal.toString()
  ).shouldBe("[Mammal \"Mr. Biggles\"]").it((c) ->
    c.someAnimal instanceof c.Mammal
  ).shouldBe(true).it((c) ->
    c.myPet.toString()
  ).shouldBe("[Cat \"Felix\"]").it((c) ->
    c.myPet instanceof c.Mammal
  ).shouldBe(true).it((c) ->
    c.myPet instanceof c.Cat
  ).shouldBe(true).it((c) ->
    c.myPet.haveABaby()
    c.myPet.offspring[0].toString()
  ).shouldBe "[Cat \"Baby Felix\"]"
