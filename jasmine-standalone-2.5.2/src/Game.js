(function(exports) {

  function Game() {
    this.player1 = "player1";
    this.player2 = "player2";
    this.grid = new Grid();
  }

  Game.prototype.currentTurn = function() {
    return this.player1;
  }

  Game.prototype.selectCell = function(index) {
    
  }

  exports.Game = Game;


})(this);
