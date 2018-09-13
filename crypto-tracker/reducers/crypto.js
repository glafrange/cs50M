import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAILURE,
  ADD_TICKER
} from '../utils/actionTypes';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
  updated: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return {
        ...state,
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null,
        updated: true
      }
    case FETCHING_COIN_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
        updated: true
      }
    case FETCHING_COIN_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        data: [],
        hasError: true,
        errorMessage: action.payload,
        updated: true
      }
    case ADD_TICKER:
      return {
        ...state,
        updated: false
      }
    default:
      return {...state};
  }
}