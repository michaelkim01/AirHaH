import { 
    RECEIVE_SESSION_ERRORS,
    REMOVE_SESSION_ERRORS 
} from '../actions/session_actions';

const _nullState = [];

const sessionErrorsReducer = (state = _nullState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case REMOVE_SESSION_ERRORS:
            return _nullState;
        default:
            return state;
    }
}

export default sessionErrorsReducer;