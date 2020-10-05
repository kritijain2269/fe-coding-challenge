import { getWinner } from '.'

describe('getWinner', () => {
  it('should return a winner X on 3 consecutive row matches', () => {
    const board = [
      ['X', 'X', null],
      ['O', 'O', null],
      [null, null, null]
    ]
    const winner = getWinner(board, 'X', 0, 2)
    expect(winner).toEqual('X')
  })

  it('should return a winner X on 3 consecutive column matches', () => {
    const board = [
      ['X', 'O', null],
      ['X', 'O', null],
      [null, null, null]
    ]
    const winner = getWinner(board, 'X', 2, 0)
    expect(winner).toEqual('X')
  })

  it('should return a winner X on 3 consecutive diagonal matches in right direction', () => {
    const board = [
      ['X', 'O', 'O'],
      ['X', 'X', null],
      [null, null, null]
    ]
    const winner = getWinner(board, 'X', 2, 2)
    expect(winner).toEqual('X')
  })

  it('should return a winner X on 3 consecutive diagonal matches in left direction', () => {
    const board = [
      ['X', 'O', 'O'],
      ['X', 'O', null],
      [null, null, null]
    ]
    const winner = getWinner(board, 'O', 2, 0)
    expect(winner).toEqual('O')
  })

  it('should return no winner if there is no match', () => {
    const board = [
      ['X', 'O', 'X'],
      ['X', 'O', 'X'],
      ['O', 'X', null]
    ]
    const winner = getWinner(board, 'O', 2, 2)
    expect(winner).toEqual(undefined)
  })
})
