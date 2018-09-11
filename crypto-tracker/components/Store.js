import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers';

const Store = createStore(RootReducer, applyMiddleware(thunk));

export default Store;