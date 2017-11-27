import * as actions from './constants';

export const initialState = {
  grid: Array(9).fill(null),
  activePlayer: actions.X
};

export default function gameReducer(state = initialState, { type, payload }) {
  console.log('in reducer');
  switch(type){
  case actions.SYMBOL_ADD:
    console.log('in symbol add case');
    var newGrid = [...state.grid];
    var { position, activePlayer } = payload;
    newGrid[position] = activePlayer;
    
    return {
      ...state,
      grid: newGrid
    };

  default: 
    return state;
  }
}




