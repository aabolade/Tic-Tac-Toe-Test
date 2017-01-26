(function() {
  describe("Game", function() {
    var game;

    beforeEach(function() {
      game = new Game();
    })

    it("has two players", function() {
      expect(game.player1).toBeDefined();
      expect(game.player2).toBeDefined();
    })
  })
})();
