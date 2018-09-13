import {
  ADD_TICKER,
  REMOVE_TICKER
} from '../utils/actionTypes';

const initialState = {
  tickers: ["BTC", "ETH"]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TICKER:
      // debugger;
      return { tickers: [...state.tickers, action.ticker] };
    case REMOVE_TICKER:
      return { tickers: state.tickers.splice(state.data.indexOf(action.ticker), 1) };
    default:
      return { ...state };
  }
};