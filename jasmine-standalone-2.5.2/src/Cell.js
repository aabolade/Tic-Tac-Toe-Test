(function(exports) {

  function Cell(xPosition, yPosition) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.contents = "Empty";
  }

  Cell.prototype.changeContents = function(id) {
    if(this.contents !== "Empty") {
      throw new Error("This cell has already been selected")
    }
    this.contents = id;
  }

  exports.Cell = Cell;

})(this);
