import { SYMBOL_ADD, TIE_GAME } from './constants';

export function addSymbol(position) {
  return (dispatch, getState) => {
    //Question: why do I need to write it this way? what is the .game property doing?
    const { activePlayer } = getState().game;
    
    dispatch({
      type: SYMBOL_ADD,
      payload: { position, activePlayer }
    });

    const { grid } = getState().game;
    if (grid.indexOf(null) === -1) {
      dispatch({
        type: TIE_GAME
      });
    }
  };
}

