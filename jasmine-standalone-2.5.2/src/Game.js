(function(exports) {

  function Game() {
    this.player1 = new Player("Nought");
    this.player2 = new Player("Cross");
    this.players = [this.player1, this.player2];
    this.grid = new Grid();
  }

  Game.prototype.currentTurn = function() {
    return this.players[0];
  }

  Game.prototype.playTurn = function(index) {
    if (!this.grid.checkForSpaces()) {
      throw new Error("Draw");
    };
    this.grid.selectCell(index, this.currentTurn().id);
    this.checkForWinner();
    this.changeTurns();
  }

  Game.prototype.changeTurns = function() {
    this.players.reverse();
  }

  Game.prototype.checkForWinner = function() {
    this.grid.updateWinningCombinations();
    this.grid.checkForWinner();
  }

  exports.Game = Game;


})(this);
