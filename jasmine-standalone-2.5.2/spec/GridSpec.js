(function() {
  describe("Grid", function() {
    var grid;

    beforeEach(function() {
      grid = new Grid();
    })

    it("stores an array", function() {
        expect(grid.cells.constructor.name).toEqual("Array");
    })

    it("array contains nine Cell objects", function() {
      expect(grid.cells.length).toEqual(9);
    })

    it("Each element of the cells array is a Cell object", function() {
      grid.cells.forEach(function(element) {
        expect(element.constructor.name).toEqual("Cell");
      })
    })

    it("Each element of cells array must have a unique cell", function() {
      expect(grid.cells[0]).not.toEqual(grid.cells[1])
    })

    it("passes an id to the cell", function() {
      spyOn(grid, 'cells').and.returnValue([{xPostion: 1, yPosition: 1, contents: "Empty"}])
      grid.selectCell(0, "id")
      expect(grid.cells[0].contents).toEqual("id")
    })


  })
})();
