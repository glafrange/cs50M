import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAILURE
} from '../utils/actionTypes';

export default function FetchCoinData() {
  return (dispatch, getState) => {
    const apiUrlStart = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=";
    const apiUrlEnd = "&tsyms=USD";
    state = getState();

    dispatch({ type: FETCHING_COIN_DATA });

    fetch(apiUrlStart + state.tickerList.tickers.join(",") + apiUrlEnd)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: Object.keys(res).map(key => {
          return {ticker: key, price: res[key].USD};
        })})
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DATA_FAILURE, payload: err.data })
      });

  }
}