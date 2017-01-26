(function() {
  describe("Cell", function() {

    var cell;

    beforeEach(function() {
      cell = new Cell(1,5);
    })

    it("should have an x and y position", function() {
      expect(cell.xPosition).toBeDefined()
      expect(cell.yPosition).toBeDefined()
    })
  })
})();
