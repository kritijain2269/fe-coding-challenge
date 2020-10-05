import React from 'react'
import { useDispatch } from 'react-redux'
import { resetGame } from '../../store/actions/moves'

import './index.css'

const Header = () => {
  const dispatch = useDispatch()

  return (
    <>
      <h1 className="Heading1">Tic Tac Toe</h1>
      <div className="ButtonWrapper">
        <button
          data-testid="btnStartGame"
          className="StartButton"
          onClick={() => dispatch(resetGame())}
        >
          Start new game
        </button>
      </div>
    </>
  )
}

export default Header
