import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import configureStore from '../../store'
import { Provider } from 'react-redux'
import * as redux from 'react-redux'

import Header from '.'

test('renders Header component', () => {
  render(
    <Provider store={configureStore()}>
      <Header />
    </Provider>
  )
  const boardText = screen.getByText(/Tic Tac Toe/i)
  expect(boardText).toBeInTheDocument()
})

test('should dispatch an action on start new game button click', () => {
  const spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')

  const { getByTestId } = render(
    <Provider store={configureStore()}>
      <Header />
    </Provider>
  )
  const startButton = getByTestId('btnStartGame')
  fireEvent.click(startButton)
  expect(spyOnUseDispatch).toHaveBeenCalled()
})
