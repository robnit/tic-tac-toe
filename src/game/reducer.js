import * as actions from './constants';
import { TIE_GAME } from './constants';

export const initialState = {
  grid: Array(9).fill(null),
  activePlayer: actions.X,
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

  case actions.TIE_GAME:
    return {
      ...state,
      tie: true
    };

  default: 
    return state;
  }
}




