import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAILURE
} from '../utils/actionTypes';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null
}

export default (state = initialState, action) => {
  // const testData = [{ticker:"BTC", price:6432.68}, {ticker:"ETH", price:227.58}];
  // return [...state, ...testData];

  console.log(action.payload);

  switch (action.type) {
    case FETCHING_COIN_DATA:
      return {
        ...state,
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null
      }
    case FETCHING_COIN_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null
      }
    case FETCHING_COIN_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        data: [],
        hasError: true,
        errorMessage: action.payload
      }
    default:
      return {...state};
  }

}