(function(exports) {

  function Grid() {

    const gridCapacity = 9;

    this.cells = [];
    this.spaces = gridCapacity;

    for(x=1; x<4; x++) {
      for(y=1; y<4; y++) {
        this.cells.push(new Cell(x,y));
      }
    }
  }

  Grid.prototype.selectCell = function(index,id) {
    this.cells[index].changeContents(id);
    this.spaces -= 1;
  }

  Grid.prototype.checkForSpaces = function() {
    return  this.spaces > 0;
  }

  exports.Grid = Grid;

})(this);
