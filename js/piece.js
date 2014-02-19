// *** CREATE PIECE *** //

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