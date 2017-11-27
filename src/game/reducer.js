import * as actions from './constants';

export const initialState = {
    grid: Array(9).fill(null),
    activePlayer: X
  };

export default function gameReducer(state=initialState, {type, payload}) {
  switch(type){
    case actions.SYMBOL_ADD:
      const newGrid = [...state.grid];
      const { position, activePlayer } = payload;
      newGrid[position] = activePlayer;
      return {
        ...state,
        grid: newGrid
      }

    default: 
      return state;
  }
}




