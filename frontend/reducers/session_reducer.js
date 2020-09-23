import {
    RECEIVE_CURRENT_USER,
    REMOVE_CURRENT_USER
} from '../actions/session';

const _nullSession = {
    currentUser: null
};

export default (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUser: action.user });
        case REMOVE_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};