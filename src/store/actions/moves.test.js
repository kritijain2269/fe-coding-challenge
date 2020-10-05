import * as Actions from './moves'

describe('selectCell', () => {
  it('should create an action to select a cell', () => {
    const expectedAction = {
      type: Actions.SELECT_CELL,
      currentPlayer: 'X',
      row: 0,
      col: 0
    }
    const result = Actions.selectCell('X', 0, 0)
    expect(result).toEqual(expectedAction)
  })
})

describe('resetGame', () => {
  it('should create an action to reset the game', () => {
    const expectedAction = {
      type: Actions.RESET_GAME
    }
    const result = Actions.resetGame()
    expect(result).toEqual(expectedAction)
  })
})
