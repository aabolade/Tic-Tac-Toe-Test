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

    
  })
})();
