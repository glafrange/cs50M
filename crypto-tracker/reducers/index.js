import { combineReducers } from 'redux';
import crypto from './crypto';
import tickerListReducer from './tickerListReducer';

export default combineReducers({
  crypto: crypto,
  tickerList: tickerListReducer
})