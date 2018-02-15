import { SYMBOL_ADD, TIE_GAME, WIN_GAME, RESET_GAME } from './constants';

export function addSymbol(position) {
  return (dispatch, getState) => {
    
    const { activePlayer } = getState().game;
    
    dispatch({
      type: SYMBOL_ADD,
      payload: { position, activePlayer }
    });

    const { grid } = getState().game;
    const winner = getWinner(grid);
    if (winner !== null) {
      dispatch({
        type: WIN_GAME,
        payload: winner
      });
    }

    if (grid.indexOf(null) === -1) {
      dispatch({
        type: TIE_GAME
      });
    }
  };
  
  function getWinner(grid) {
    const rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < rows.length; i++) {
      const [a, b, c] = rows[i];
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[c];
      }
    }
    return null;
  }
}

export function resetGame() {
  return (dispatch, getState) => {
    const { whoWon } = getState().game;
    
    dispatch({
      type: RESET_GAME,
      payload: { whoWon }
    });

  };
}
  
