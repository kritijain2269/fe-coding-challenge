import React from 'react'
import isNil from 'lodash/isNil'
import { useSelector } from 'react-redux'

import './index.css'

const Player = ({ onGenerateClick }) => {
  const game = useSelector((state) => state.game)
  return (
    <div className="Player">
      {isNil(game.winner) ? (
        game.count !== 9 ? (
          <>
            <div className="NextMove">
              Next move :
              <span
                data-testid="nextPlayer"
                className={`CurrentPlayer Cell${game.currentPlayer}`}
              >
                Player {game.currentPlayer}
              </span>
            </div>
            <div className="ButtonWrapper">
              <button
                data-testid="btnGenerateRandom"
                className="StartButton"
                onClick={onGenerateClick}
              >
                Generate random
              </button>
            </div>
          </>
        ) : (
          <div className="WinnerMessage">It's a Tie!!</div>
        )
      ) : (
        <div className="WinnerMessage">
          Congratulations, Player {game.winner} has won the game !!!
        </div>
      )}
      <span className="NoteMessage">
        Note: You can play this game either by clicking on each cell or geneate
        random button
      </span>
    </div>
  )
}

export default Player
