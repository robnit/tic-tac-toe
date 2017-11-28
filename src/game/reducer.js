import * as actions from './constants';

export const initialState = {
  grid: Array(9).fill(null),
  activePlayer: actions.X,
  won: false,
  tie: false
};

//Question: why does lint flip out if we use anything other than var within a switch?
export default function game(state = initialState, { type, payload }) {
  switch(type){
  case actions.SYMBOL_ADD:
    var newGrid = [...state.grid];
    var { position, activePlayer } = payload;
    if (newGrid[position] !== null) return state;
    newGrid[position] = activePlayer;
    var newPlayer = (activePlayer === 'X') ? 'O' : 'X';
    return {
      ...state,
      grid: newGrid,
      activePlayer: newPlayer
    };

  case actions.WIN_GAME:
    return  {
      ...state,
      won: true
    };

  case actions.TIE_GAME:
    return {
      ...state,
      tie: true
    };

  default: 
    return state;
  }
}




