import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import isNil from 'lodash/isNil'
import { selectCell } from '../../store/actions/moves'

import { getWinner } from '../../utils/getWinner'
import { getRandomCell } from '../../utils/getRandomCell'
import Header from '../header'
import Player from '../player'
import './index.css'

const selectBoard = (state) => state.board
const selectGame = (state) => state.game

export const Board = () => {
  const board = useSelector(selectBoard)
  const game = useSelector(selectGame)
  const dispatch = useDispatch()

  const getRandomMove = () => {
    let row
    let col
    do {
      row = getRandomCell(board.length)
      col = getRandomCell(board.length)
    } while (!isNil(board[row][col]))
    handleSelectCell(row, col)
  }

  const handleSelectCell = (rowIndex, colIndex) => {
    if (!isNil(board[rowIndex][colIndex]) || !isNil(game.winner)) {
      return
    }

    let winner
    const count = game.count + 1

    if (count >= 5) {
      winner = getWinner(board, game.currentPlayer, rowIndex, colIndex)
    }
    dispatch(selectCell(game.currentPlayer, rowIndex, colIndex, winner, count))
  }

  return (
    <>
      <Header />
      <div className="Board">
        {board &&
          board.map((rowValue, rowIndex) => {
            return (
              <div className="BoardRow" key={rowIndex}>
                {rowValue.map((colValue, colIndex) => {
                  return (
                    <div
                      data-testid="cell"
                      className={`Cell Cell${isNil(colValue) ? 'X' : colValue}`}
                      key={colIndex}
                      value={colValue}
                      onClick={() => handleSelectCell(rowIndex, colIndex)}
                    >
                      {colValue}
                    </div>
                  )
                })}
              </div>
            )
          })}
      </div>
      <Player onGenerateClick={getRandomMove} />
    </>
  )
}
