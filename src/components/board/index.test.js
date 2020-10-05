import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Board } from '.'
import configureStore from '../../store'
import { Provider } from 'react-redux'

test('renders Board', () => {
  const { container } = render(
    <Provider store={configureStore()}>
      <Board />
    </Provider>
  )
  expect(container).toMatchSnapshot()
})

test('should display X on click of cell', () => {
  const { getAllByTestId } = render(
    <Provider store={configureStore()}>
      <Board />
    </Provider>
  )
  const cell = getAllByTestId('cell')
  fireEvent.click(cell[0])
  expect(cell[0].textContent).toEqual('X')
})

test('should display X in atleast one cell on clicking generate random button', () => {
  const { getByTestId, getAllByTestId } = render(
    <Provider store={configureStore()}>
      <Board />
    </Provider>
  )
  const generateRandom = getByTestId('btnGenerateRandom')
  const cell = getAllByTestId('cell')
  fireEvent.click(generateRandom)
  const result = cell.some((x) => x.textContent === 'X')
  expect(result).toEqual(true)
})
