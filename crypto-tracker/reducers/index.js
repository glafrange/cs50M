import { combineReducers } from 'redux';
import crypto from './crypto';
import tickerList from './tickerList';

export default combineReducers({
  crypto: crypto,
  tickerList: tickerList
})