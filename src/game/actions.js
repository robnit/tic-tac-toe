import { SYMBOL_ADD } from './constants';

export function addSymbol(position, symbol) {
  console.log('in addSymbol, position', position,'\n symbol', symbol);
  return {
    type: SYMBOL_ADD,
    payload: { position, symbol }
  };
}