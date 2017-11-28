import { SYMBOL_ADD } from './constants';

export function addSymbol(position, activePlayer) {
  return {
    type: SYMBOL_ADD,
    payload: { position, activePlayer }
  };
}