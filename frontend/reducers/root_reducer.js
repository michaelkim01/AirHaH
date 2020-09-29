import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import modalReducer from './modal_reducer';
import errorsReducer from './errors_reducer';
import housingsReducer from './housings_reducer';

const RootReducer = combineReducers({
    housings: housingsReducer,
    session: sessionReducer,
    modal: modalReducer,
    errors: errorsReducer
});

export default RootReducer;