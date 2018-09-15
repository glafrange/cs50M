import {
  ADD_TICKER
} from '../utils/actionTypes';

export default function AddNewTicker(ticker) {
  const action = {
    type: ADD_TICKER,
    ticker: ticker
  };
  return action;
}