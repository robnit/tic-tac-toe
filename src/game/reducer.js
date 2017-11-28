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
    if (state.gameOver === true) return state;

    newGrid[position] = activePlayer;
    const newPlayer = (activePlayer === 'X') ? 'O' : 'X';
    return {
      ...state,
      grid: newGrid,
      activePlayer: newPlayer
    };
  }

  case actions.WIN_GAME:{
    if (state.gameOver === true) return state;

    let xWins = state.xWins;
    let oWins = state.oWins;

    if(payload === 'X') {
      xWins++;
    }
    else if(payload === 'O') {
      oWins++;
    }

    return  {
      ...state,
      whoWon: payload,
      gameOver: true,
      xWins: xWins,
      oWins: oWins
    };
  }

  case actions.TIE_GAME:
    return {
      ...state,
      tie: true,
      gameOver: true
    };

  case actions.RESET_GAME: {
    //active player to !WhoWon
    //set all of grid to null
    //set gameover to false
    //set whoWon to nobody
    let newActivePlayer = state.activePlayer;

    if (state.tie === false) {
      newActivePlayer = (state.whoWon === 'X') ? 'O' : 'X';
    }

    else {
      newActivePlayer = (state.activePlayer === 'X') ? 'O' : 'X';
    }
 
    const newGrid = Array(9).fill(null);

    return{
      ...state,
      grid: newGrid,
      activePlayer: newActivePlayer,
      gameOver: false,
      whoWon: 'nobody'
    };
  }

  default: 
    return state;
  }
}




