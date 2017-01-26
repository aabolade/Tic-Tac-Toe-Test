(function(exports) {

  function Game() {
    this.player1 = "player1";
    this.player2 = "player2";

  }

  Game.prototype.currentTurn = function() {
    return this.player1;
  }

  exports.Game = Game;


})(this);
