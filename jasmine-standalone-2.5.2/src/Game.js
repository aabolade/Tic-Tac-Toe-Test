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
    this.grid.selectCell(index);
    this.changeTurns();
  }

  Game.prototype.changeTurns = function() {
    this.players.reverse();
  }

  exports.Game = Game;


})(this);
