import * as actions from './constants';

export const initialState = {
  grid: Array(9).fill(null),
  activePlayer: actions.X
};

//Question: why does lint flip out if we use anything other than var within a switch?
export default function game(state = initialState, { type, payload }) {
  switch(type){
  case actions.SYMBOL_ADD:
    var newGrid = [...state.grid];
    var { position, activePlayer } = payload;
    newGrid[position] = activePlayer;

    var newPlayer = (activePlayer === 'X') ? 'O' : 'X';
    return {
      ...state,
      grid: newGrid,
      activePlayer: newPlayer
    };

  default: 
    return state;
  }
}




