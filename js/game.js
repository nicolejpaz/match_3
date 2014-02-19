$(document).ready(function() {
  GAME_PIECE_SIZE = 50

  makeColorConstant()
  new Game()
})

function makeColorConstant() {
  var blue = "#0c5da5"
  var purple = "#8106a9"
  var yellow = "#e9fb00"
  var orange = "#ff9500"
  COLORS = [blue, purple, yellow, orange]
}

function Game() {
  var gameCanvas = document.querySelector("#game-canvas") 
  new Board(gameCanvas)
}