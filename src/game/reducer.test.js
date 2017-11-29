import reducer from './reducer';
import { SYMBOL_ADD, TIE_GAME, RESET_GAME, WIN_GAME } from './constants';

describe('reducer test', () => {

  it('should initialize', () => {
    const state = reducer(undefined, {});
    expect(state.gameOver).toEqual(false);
  });

  it('should add a symbol', () => {
    const state = reducer(undefined, { type: SYMBOL_ADD, payload: { position:3, activePlayer:'O' } });
    expect(state.grid[3]).toEqual('O');
  });

  it('should reset the game', () => {
    let state = reducer(undefined, { type: SYMBOL_ADD, payload: { position:3, activePlayer:'O' } });
    
    state = reducer(state, { type: RESET_GAME });

    expect(state.grid[3]).toEqual(null);
  });

  it('should register a game win', () => {
    let state = reducer(undefined, { type: WIN_GAME, payload: 'X' });
    expect(state.xWins).toEqual(1);
  });

  it('should register a tie game', () => {
    let state = reducer(undefined, { type: TIE_GAME });
    expect(state.tie).toEqual(true);
  });


});