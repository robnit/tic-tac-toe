import * as actions from './constants';

export const initialState = {
  grid: Array(9).fill(null),
  activePlayer: actions.X,
  whoWon: 'nobody',
  tie: false,
  xWins: 0,
  oWins: 0,
  gameOver: false
};

//Question: why does lint flip out if we use anything other than var within a switch?
export default function game(state = initialState, { type, payload }) {
  switch(type){
  case actions.SYMBOL_ADD: {
    const newGrid = [...state.grid];
    const { position, activePlayer } = payload;
    if (newGrid[position] !== null) return state;
    newGrid[position] = activePlayer;
    const newPlayer = (activePlayer === 'X') ? 'O' : 'X';
    return {
      ...state,
      grid: newGrid,
      activePlayer: newPlayer
    };
  }

  case actions.WIN_GAME:{
    console.log('in reducer, payload is', payload);
    return  {
      ...state,
      whoWon: payload,
      gameOver: true
    };
  }

  case actions.TIE_GAME:
    return {
      ...state,
      tie: true,
      gameOver: true
    };

  default: 
    return state;
  }
}




