(function() {
  describe("Game", function() {
    var game;

    beforeEach(function() {
      game = new Game();
      spyOn(game.grid, 'selectCell')
    })

    it("has two players", function() {
      expect(game.player1).toBeDefined();
      expect(game.player2).toBeDefined();
    })

    it("stores a grid object", function() {
      expect(game.grid.constructor.name).toEqual("Grid");
    })

    it("starts with player 1", function() {
      expect(game.currentTurn()).toEqual(game.player1)
    })

    it("playing calls methods on the contents of the grid's cell", function() {
      gridIndex = 0;
      game.selectCell(gridIndex);
      expect(game.grid.selectCell).toHaveBeenCalledWith(gridIndex)
    })
  })
})();
