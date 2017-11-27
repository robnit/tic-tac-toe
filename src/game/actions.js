import * as actions from './constants';
import { SYMBOL_ADD } from './constants';

export function addSymbol(position, symbol) {
  return {
    type: SYMBOL_ADD,
    payload: {position, symbol}
  }
}