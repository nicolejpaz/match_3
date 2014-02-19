$(document).ready(function() {
  new Main()
})

function Main() {
  var gameCanvas = document.querySelector("#game-canvas") 
  new Piece(gameCanvas)
}



function Piece(gameCanvas) {
  var gamePiece = gameCanvas.getContext("2d")
  gamePiece.fillStyle = "#ccc"
  gamePiece.fillRect(0, 0, 25, 25)
}