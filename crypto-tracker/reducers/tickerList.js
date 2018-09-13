import {
  ADD_TICKER,
  REMOVE_TICKER
} from '../utils/actionTypes';

const initialState = {
  tickers: ["BTC", "ETH"]
};

export default (state = initialState, action) => {
  let newdata;
  switch (action.type) {
    case ADD_TICKER:
      newData = [...state.data, ...action.payload];
      return { data: newData };
    case REMOVE_TICKER:
      newData = state.data.splice(state.data.indexOf(action.payload), 1);
      return { data: newData };
    default:
      return { ...state };
  }
};