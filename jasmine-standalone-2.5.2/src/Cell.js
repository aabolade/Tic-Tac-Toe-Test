(function(exports) {

  function Cell(xPosition, yPosition) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.contents = "Empty";
  }

  Cell.prototype.makeNought = function() {
    this.contents = "Nought";
  }

  Cell.prototype.makeCross = function() {
    this.contents = "Cross";
  }

  exports.Cell = Cell;

})(this);
