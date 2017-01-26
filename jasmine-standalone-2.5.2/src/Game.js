(function(exports) {

  function Game() {
    this.player1 = "player1";
    this.player2 = "player2";
    this.players = [this.player1, this.player2];
    this.grid = new Grid();
  }

  Game.prototype.currentTurn = function() {
    return this.players[0];
  }

  Game.prototype.playTurn = function(index) {
    this.grid.selectCell(index)
    this.changeTurns();
  }

  Game.prototype.changeTurns = function() {
    this.players.reverse();
  }

  exports.Game = Game;


})(this);
