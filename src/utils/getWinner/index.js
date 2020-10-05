import isNil from 'lodash/isNil'

export const getWinner = (board, currentPlayer, rowIndex, colIndex) => {
  let winner
  let index = 0

  const newBoard = JSON.parse(JSON.stringify(board))
  newBoard[rowIndex][colIndex] = currentPlayer

  do {
    if (
      newBoard[0][index] === newBoard[1][index] &&
      newBoard[1][index] === newBoard[2][index]
    ) {
      winner = newBoard[0][index]
    } else if (
      newBoard[index][0] === newBoard[index][1] &&
      newBoard[index][1] === newBoard[index][2]
    ) {
      winner = newBoard[index][0]
    } else if (
      newBoard[0][0] === newBoard[1][1] &&
      newBoard[1][1] === newBoard[2][2]
    ) {
      winner = newBoard[0][0]
    } else if (
      newBoard[0][2] === newBoard[1][1] &&
      newBoard[1][1] === newBoard[2][0]
    ) {
      winner = newBoard[0][2]
    }

    index++
  } while (isNil(winner) && index < newBoard.length)

  return winner
}
