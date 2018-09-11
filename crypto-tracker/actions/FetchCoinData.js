import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAILURE
} from '../utils/actionTypes';

export default function FetchCoinData() {
  return dispatch => {

    dispatch({ type: FETCHING_COIN_DATA });

    fetch("https://api.coinmarketcap.com/v2/ticker/?limit=30")
      .then(res => res.json())
      .then(res => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: Object.keys(res.data).map(key => res.data[key]) })
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DATA_FAILURE, payload: err.data })
      });

  }
}