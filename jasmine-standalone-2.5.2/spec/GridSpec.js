(function() {
  describe("Grid", function() {
    var grid;

    beforeEach(function() {
      game = {currentTurn: function() { return "Nought" }}
      grid = new Grid(game);
    })

    it("stores an array", function() {
        expect(grid.cells.constructor.name).toEqual("Array");
    });

    it("array contains nine Cell objects", function() {
      expect(grid.cells.length).toEqual(9);
    });

    it("Each element of the cells array is a Cell object", function() {
      grid.cells.forEach(function(element) {
        expect(element.constructor.name).toEqual("Cell");
      });
    });

    it("Each element of cells array must have a unique cell", function() {
      expect(grid.cells[0]).not.toEqual(grid.cells[1]);
    });

    it("passes an id to the cell", function() {
      spyOn(grid, 'cells').and.returnValue([{xPostion: 1, yPosition: 1, contents: "Empty"}]);
      grid.selectCell(0, "id");
      expect(grid.cells[0].contents).toEqual("id");
    });

    describe("checking if the grid is full", function() {
      it("the grid is full after at most nine moves", function() {
        for(count=0;count<9;count++) {
          grid.selectCell(count, "id");
        }
        expect(grid.checkForSpaces()).toBeFalsy();
      });

      it("is not full before nine moves", function() {
        expect(grid.checkForSpaces()).toBeTruthy();
      });
    });

    describe("Nought is the winner", function() {

      beforeEach(function() {
        grid.selectCell(0,"Nought");
        grid.selectCell(1,"Nought");
        grid.selectCell(2,"Nought");
      })

      it("the game ends when a winner is found", function() {
        grid.updateWinningCombinations();
        expect(function() {grid.checkForWinner()}).toThrow(new Error("Nought is the winner"));
      })
    })

    describe("Cross is the winner", function() {

      beforeEach(function() {
        game = {currentTurn: function() { return "Cross" }}
        grid = new Grid(game)
        grid.selectCell(0,"Cross");
        grid.selectCell(1,"Cross");
        grid.selectCell(2,"Cross");
      })

      it("the game ends when a winner is found", function() {
        grid.updateWinningCombinations();
        expect(function() {grid.checkForWinner()}).toThrow(new Error("Cross is the winner"));
      });
    });

  });

})();
