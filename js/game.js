$(document).ready(function() {
  GAME_PIECE_SIZE = 50
  makeColorConstant()

  new Main()
})

function makeColorConstant() {
  var blue = "#0c5da5"
  var purple = "#8106a9"
  var yellow = "#e9fb00"
  var orange = "#ff9500"
  COLORS = [blue, purple, yellow, orange]
}

function Main() {
  var gameCanvas = document.querySelector("#game-canvas") 
  new Board(gameCanvas)
}

// *** CREATE BOARD *** //

function Board(gameCanvas) {
  var gameBoard = gameCanvas.getContext("2d")
  new Piece(gameCanvas)
  makeBoardLines(gameBoard)
}

function makeBoardLines(gameBoard) {
  for(var i = 0; i <= 500; i += GAME_PIECE_SIZE) {
    gameBoard.moveTo(i, 0)
    gameBoard.lineTo(i, 500)
    gameBoard.stroke()
    
    gameBoard.moveTo(0, i)
    gameBoard.lineTo(500, i)
    gameBoard.stroke()
  }
}

function Piece(gameCanvas) {
  var gamePiece = gameCanvas.getContext("2d")

  for(var y = 0; y <= 500; y += GAME_PIECE_SIZE) {
    for(var x = 0; x <= 500; x += GAME_PIECE_SIZE) {
      var color = pickColor()
      gamePiece.fillStyle = color
      gamePiece.fillRect(x, y, GAME_PIECE_SIZE, GAME_PIECE_SIZE)
    }
  }

}

function pickColor() {
  return COLORS[Math.floor(Math.random() * 4)]
}