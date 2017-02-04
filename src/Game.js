(function(exports) {

  function Game() {
    this.player1 = new Player("O");
    this.player2 = new Player("X");
    this.players = [this.player1, this.player2];
    this.grid = new Grid(this);
    this.winner = false;
  }

  Game.prototype.currentTurn = function() {
    return this.players[0];
  }

  Game.prototype.playTurn = function(index) {
    this.checkGameOver();
    this.checkForSpaces();
    this.grid.selectCell(index, this.currentTurn().id);
    this.changeCellDisplay(index);
    this.checkForWinner();
    this.changeTurns();
  }

  Game.prototype.checkForSpaces = function() {
    if (!this.grid.checkForSpaces()) {
      var winner = document.getElementById("winner")
      winner.innerHTML = "Draw!"
    };
  }

  Game.prototype.changeCellDisplay = function(index) {
    buttonText = document.getElementById(`button-${index}`)
    buttonText.style.fontSize = "30"
    buttonText.textContent = this.currentTurn().id
  }

  Game.prototype.changeTurns = function() {
    this.players.reverse();
  }

  Game.prototype.checkForWinner = function() {
    this.grid.updateWinningCombinations();
    this.grid.checkForWinner();
  }

  Game.prototype.checkGameOver = function() {
    if (this.winner === true) {
      throw new Error("Game over")
    }

  }

  exports.Game = Game;


})(this);
