import { createBoard, board, game } from '.'
import * as Actions from '../actions/moves'

describe('createBoard', () => {
  it('should regenerate a square 2D array of provided length', () => {
    Array(10)
      .fill()
      .map((_, i) => {
        const board = createBoard(i)
        expect(board).toHaveLength(i)
        return board.forEach((row) => expect(row).toHaveLength(i))
      })
  })
})

describe('board', () => {
  it('should create a default board state of length 3', () => {
    const expectedState = createBoard(3)
    const result = board(undefined, {})

    expect(result).toEqual(expectedState)
  })

  it('should update a co-ordinate to match the currentPlayer', () => {
    const state = createBoard(3)
    const result = board(state, Actions.selectCell('X', 0, 0))

    state[0][0] = 'X'

    expect(result).toEqual(state)
  })

  it('should reset the board', () => {
    const state = createBoard(3)
    const result = board(undefined, Actions.resetGame())
    expect(result).toEqual(state)
  })
})

describe('game', () => {
  it('should create a default game state with current player and no winner', () => {
    const expectedState = {
      currentPlayer: 'X',
      winner: null,
      count: 0
    }
    const result = game(undefined, {})

    expect(result).toEqual(expectedState)
  })

  it('should update a co-ordinate to match the currentPlayer', () => {
    const xState = { currentPlayer: 'X', winner: null, count: 1 }
    const oState = { currentPlayer: 'O', winner: null, count: 1 }

    const xResult = game(xState, Actions.selectCell('X', 0, 0, null, 1))
    const oResult = game(oState, Actions.selectCell('O', 0, 0, null, 1))

    expect(xResult).toEqual(oState)
    expect(oResult).toEqual(xState)
  })

  it('should reset the winner and current player', () => {
    const expectedState = {
      currentPlayer: 'X',
      winner: null,
      count: 0
    }
    const result = game(undefined, Actions.resetGame())

    expect(result).toEqual(expectedState)
  })
})
