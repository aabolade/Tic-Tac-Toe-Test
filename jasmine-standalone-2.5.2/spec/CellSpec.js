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

    it("has a method to change its contents", function() {
      cell.changeContents("Nought");
      expect(cell.contents).toEqual("Nought")
    })
  });
})();
