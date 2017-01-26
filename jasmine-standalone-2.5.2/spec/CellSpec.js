(function() {
  describe("Cell", function() {

    var cell;

    beforeEach(function() {
      cell = new Cell(1,5);
    })

    it("should have an x and y position", function() {
      expect(cell.xPosition).toBeDefined();
      expect(cell.yPosition).toBeDefined();
    })

    it("should be initialised with empty content", function() {
      expect(cell.contents).toEqual("Empty");
    });

    describe("during a game", function() {
      it("selecting a nought changes the contents property of the cell", function() {
        cell.makeNought();
        expect(cell.contents).toEqual("Nought");
      })

      it("selecting a cross changes the contents property of the cell", function() {
        cell.makeCross();
        expect(cell.contents).toEqual("Cross");
      })
    })
  });
})();
