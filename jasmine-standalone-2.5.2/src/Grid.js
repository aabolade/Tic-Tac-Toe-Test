(function(exports) {

  function Grid(game) {

    const gridCapacity = 9;

    this.cells = [];
    this.game = game;
    this.spaces = gridCapacity;

    for(x=1; x<4; x++) {
      for(y=1; y<4; y++) {
        this.cells.push(new Cell(x,y));
      }
    }

    this.winningCombinations = [[this.cells[0].contents,this.cells[1].contents,this.cells[2].contents],
                                [this.cells[3].contents,this.cells[4].contents,this.cells[5].contents],
                                [this.cells[6].contents,this.cells[7].contents,this.cells[8].contents],
                                [this.cells[0].contents,this.cells[3].contents,this.cells[6].contents],
                                [this.cells[1].contents,this.cells[4].contents,this.cells[7].contents],
                                [this.cells[2].contents,this.cells[5].contents,this.cells[8].contents],
                                [this.cells[0].contents,this.cells[4].contents,this.cells[8].contents],
                                [this.cells[2].contents,this.cells[4].contents,this.cells[6].contents]];
  }

  Grid.prototype.selectCell = function(index,id) {
    this.cells[index].changeContents(id);
    this.spaces -= 1;
  }

  Grid.prototype.checkForSpaces = function() {
    return this.spaces > 0;
  }

  Grid.prototype.updateWinningCombinations = function() {
    this.winningCombinations = [[this.cells[0].contents,this.cells[1].contents,this.cells[2].contents],
                                [this.cells[3].contents,this.cells[4].contents,this.cells[5].contents],
                                [this.cells[6].contents,this.cells[7].contents,this.cells[8].contents],
                                [this.cells[0].contents,this.cells[3].contents,this.cells[6].contents],
                                [this.cells[1].contents,this.cells[4].contents,this.cells[7].contents],
                                [this.cells[2].contents,this.cells[5].contents,this.cells[8].contents],
                                [this.cells[0].contents,this.cells[4].contents,this.cells[8].contents],
                                [this.cells[2].contents,this.cells[4].contents,this.cells[6].contents]];
  }

  Grid.prototype.checkForWinner = function() {
    this.winningCombinations.forEach(function(element) {
      var unique = element.filter(function(item, i, arr) {
        return arr.indexOf(item) === i;
      });
      if (!unique.includes("Empty") && unique.length === 1) {
        console.log(this.game)
        throw new Error(`${this.game.currentTurn()} is the winner`)
      }
    })
  }

  exports.Grid = Grid;

})(this);
