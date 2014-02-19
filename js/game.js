$(document).ready(function() {
  new Main()
})

function Main() {
  var gameCanvas = document.querySelector("#game-canvas") 
  new Board(gameCanvas)
}

function Board(gameCanvas) {
  var gameBoard = gameCanvas.getContext("2d")
  new Piece(gameCanvas)
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

  for(var y = 0; y <= 500; y += 25) {
    for(var x = 0; x <= 500; x += 25) {
      gamePiece.fillStyle = pickColor()
      gamePiece.fillRect(x, y, 25, 25)
    }
  }

}

function pickColor() {
  var colors = ["#0c5da5", "#8106a9", "#e9fb00", "#ff9500"]
  return colors[Math.floor(Math.random() * 4)]
}