import {
  ADD_TICKER,
  REMOVE_TICKER,
  FETCHING_COIN_DATA_FAILURE
} from '../utils/actionTypes';

const initialState = {
  tickers: ["BTC", "ETH"]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TICKER:
      return { tickers: [...state.tickers, action.ticker] };
    case REMOVE_TICKER:
      return { 
        tickers: state.tickers.splice(state.tickers.indexOf(action.ticker), 1) 
      };
    case FETCHING_COIN_DATA_FAILURE:
      return {
        ...state
      }
    default:
      return { ...state };
  }
};