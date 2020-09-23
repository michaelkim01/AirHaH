import { createStore, applyMiddleware } from 'redux';
import  thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const createStore = (preloadedState = {}) => {
    return createStore(RootReducer, preloadedState, applyMiddleware(thunk));
};

export default createStore;