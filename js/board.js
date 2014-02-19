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