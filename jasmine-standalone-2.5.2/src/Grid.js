(function(exports) {

  function Grid() {

    this.cells = [];

    for(x=0; x<3; x++) {
      for(y=0; y<3; y++) {
        this.cells.push(new Cell(x,y));
      }
    }

  }

  exports.Grid = Grid;

})(this);
