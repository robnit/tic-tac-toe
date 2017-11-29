import reducer from './reducer';
import { SYMBOL_ADD, TIE_GAME, X, O, RESET_GAME } from './constants';

describe('reducer test', () => {

  it('should initialize', () => {
    const state = reducer(undefined, {});
    expect(state.gameOver).toEqual(false);

  });



});