$(document).ready(function() {
  new Main()
})

function Main() {
  var gameCanvas = document.querySelector("#game-canvas") 
  new Board(gameCanvas)
  new Piece(gameCanvas)
}

function Board(gameCanvas) {
  var gameBoard = gameCanvas.getContext("2d")
  makeBoardLines(gameBoard)
}

function makeBoardLines(gameBoard) {
  for(var i = 0; i <= 500; i += 25) {
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
  gamePiece.fillStyle = "#ccc"
  gamePiece.fillRect(0, 0, 25, 25)
}