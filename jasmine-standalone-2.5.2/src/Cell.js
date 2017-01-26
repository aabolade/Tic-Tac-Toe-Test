(function(exports) {

  function Cell(xPosition, yPosition) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.contents = "Empty";
  }

  Cell.prototype.changeContents = function(id) {
    this.contents = id;
  }

  exports.Cell = Cell;

})(this);
