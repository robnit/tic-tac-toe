import { SYMBOL_ADD } from './constants';

export function addSymbol(position, activePlayer) {
  console.log('in addactivePlayer, position', position,'\n activePlayer', activePlayer);
  return {
    type: SYMBOL_ADD,
    payload: { position, activePlayer }
  };
}