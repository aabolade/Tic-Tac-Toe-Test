(function() {
  describe("Player", function() {
    var player;

    beforeEach(function() {
      player = new Player("Nought");
    })

    it("has a string id", function() {
      expect(player.id).toEqual("Nought")
    })
  })
})();
