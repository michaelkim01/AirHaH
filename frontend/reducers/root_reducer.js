import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import modalReducer from './modal_reducer';

const RootReducer = combineReducers({
    session: sessionReducer,
    modal: modalReducer
});

export default RootReducer;