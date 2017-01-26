(function() {
  describe("Game", function() {
    var game;

    beforeEach(function() {
      game = new Game();
      spyOn(game.grid, 'selectCell')
    })

    it("has two players which are Player objects", function() {
      expect(game.player1.constructor.name).toEqual("Player");
      expect(game.player2.constructor.name).toEqual("Player");
    })

    it("two players have different ids", function() {
      expect(game.player1.id).not.toEqual(game.player2.id)
    })

    it("stores a grid object", function() {
      expect(game.grid.constructor.name).toEqual("Grid");
    })

    it("starts with player 1", function() {
      expect(game.currentTurn()).toEqual(game.player1)
    })

    it("after a turn is made it switches the player", function() {
      game.playTurn(0);
      expect(game.currentTurn()).not.toEqual(game.player1)
    })

    it("After a turn, the cell contents equal the player id", function() {
      game.playTurn(0);
      expect(game.grid.selectCell).toHaveBeenCalledWith(0, game.player1.id)
    })


  })
})();
