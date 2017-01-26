(function(exports) {

  function Grid() {

    this.cells = [];

    for(x=1; x<4; x++) {
      for(y=1; y<4; y++) {
        this.cells.push(new Cell(x,y));
      }
    }
  }

  Grid.prototype.selectCell = function(index,id) {
    this.cells[index].changeContents(id);
  }

  exports.Grid = Grid;

})(this);
