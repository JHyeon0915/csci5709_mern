import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import productReducer from './reducers/productReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    products: productReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));