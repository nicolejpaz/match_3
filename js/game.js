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

// *** CREATE BOARD *** //

function Board(gameCanvas) {
  var boardPosition = createBoard(gameCanvas)

  var gameBoard = gameCanvas.getContext("2d")
  makeBoardLines(gameBoard)
}

function createBoard(gameCanvas) {
  var boardPosition = []
  
  for(var pieceNumber = 0; pieceNumber <= 100; pieceNumber++) {
    for(var y = 0; y <= 500; y += GAME_PIECE_SIZE) {
      for(var x = 0; x <= 500; x += GAME_PIECE_SIZE) {
        boardPosition[pieceNumber] = Piece
        buildPiece(boardPosition[pieceNumber], gameCanvas, x, y)
      }
    }
  }
  return boardPosition
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

function buildPiece(piece, gameCanvas, x, y) {
  piece.build(gameCanvas, x, y)
  if (Piece.color() === COLORS[0]) {
    piece.type = "blue"
  } else if (Piece.color() === COLORS[1]) {
    piece.type = "purple"
  } else if (Piece.color() === COLORS[2]) {
    piece.type = "yellow"
  } else if (Piece.color() === COLORS[3]) {
    piece.type = "orange"
  }
}

var Piece = {
  color: function() {
    return pickColor()
  },
  build: function(gameCanvas, x, y) {
    var gamePiece = gameCanvas.getContext("2d")

    gamePiece.fillStyle = this.color()
    gamePiece.fillRect(x, y, GAME_PIECE_SIZE, GAME_PIECE_SIZE)
  }
}

function pickColor() {
  return COLORS[Math.floor(Math.random() * 4)]
}