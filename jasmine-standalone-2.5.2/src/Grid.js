(function(exports) {

  function Grid() {

    this.cells = [];

    for(count=0; count<9; count++) {
      this.cells.push(new Cell(1,1));
    }

  }

  exports.Grid = Grid;

})(this);
