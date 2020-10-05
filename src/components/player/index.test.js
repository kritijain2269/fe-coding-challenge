import React from 'react'
import { render, screen } from '@testing-library/react'
import Player from '.'
import configureStore from '../../store'
import { Provider } from 'react-redux'
import * as redux from 'react-redux'

test('renders Board text', () => {
  render(
    <Provider store={configureStore()}>
      <Player />
    </Provider>
  )
  const playerText = screen.getByText(/Player X/i)
  expect(playerText).toBeInTheDocument()
})

test('should render Player X as winner', () => {
  const spy = jest.spyOn(redux, 'useSelector')
  spy.mockReturnValue({ winner: 'X', currentPlayer: 'X', count: 5 })

  render(
    <Provider store={configureStore()}>
      <Player />
    </Provider>
  )
  const playerText = screen.getByText(
    /Congratulations, Player X has won the game !!!/i
  )
  expect(playerText).toBeInTheDocument()
})

test('should render Player O as winner', () => {
  const spy = jest.spyOn(redux, 'useSelector')
  spy.mockReturnValue({ winner: 'O', currentPlayer: 'O', count: 5 })

  render(
    <Provider store={configureStore()}>
      <Player />
    </Provider>
  )
  const playerText = screen.getByText(
    /Congratulations, Player O has won the game !!!/i
  )
  expect(playerText).toBeInTheDocument()
})

test('should display a tie message', () => {
  const spy = jest.spyOn(redux, 'useSelector')
  spy.mockReturnValue({ winner: undefined, currentPlayer: 'O', count: 9 })

  render(
    <Provider store={configureStore()}>
      <Player />
    </Provider>
  )
  const playerText = screen.getByText(/It's a Tie!!/i)
  expect(playerText).toBeInTheDocument()
})

test('should display next move message', async () => {
  const spy = jest.spyOn(redux, 'useSelector')
  spy.mockReturnValue({ winner: undefined, currentPlayer: 'O', count: 6 })

  const { findByTestId } = render(
    <Provider store={configureStore()}>
      <Player />
    </Provider>
  )
  const nextPlayerText = await findByTestId('nextPlayer')
  expect(nextPlayerText.textContent).toEqual('Player O')
})
