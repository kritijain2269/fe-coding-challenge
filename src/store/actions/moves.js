export const SELECT_CELL = 'SELECT_CELL'
export const RESET_GAME = 'RESET_GAME'

export function selectCell(currentPlayer, row, col, winner, count) {
  return {
    type: SELECT_CELL,
    currentPlayer,
    row,
    col,
    winner,
    count
  }
}

export function resetGame() {
  return {
    type: RESET_GAME
  }
}
