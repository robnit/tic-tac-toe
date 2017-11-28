import { SYMBOL_ADD } from './constants';

export function addSymbol(position) {
  return (dispatch, getState) => {
    //Question: why do I need to write it this way? what is the .game property doing?
    const { activePlayer } = getState().game;
    return dispatch({
      type: SYMBOL_ADD,
      payload: { position, activePlayer }
    });
  };
}