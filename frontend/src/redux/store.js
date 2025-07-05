import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer,
    products: productReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));