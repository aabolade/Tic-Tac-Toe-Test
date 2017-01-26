(function() {
  describe("Grid", function() {
    var grid;

    beforeEach(function() {
      grid = new Grid();
    })

    it("stores an array", function() {
        expect(grid.cells).toEqual([]);
    })
  })
})();
