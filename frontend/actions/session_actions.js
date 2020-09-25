import {
    postUser,
    postSession,
    deleteSession
} from '../utils/session_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const removeErrors = () => ({
    type: REMOVE_SESSION_ERRORS
});

export const createNewUser = formUser => dispatch => (
    postUser(formUser).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = formUser => dispatch => (
    postSession(formUser).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(removeCurrentUser()));