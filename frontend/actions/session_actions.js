import {
    postUser,
    postSession,
    deleteSession
} from '../utils/session_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
});

export const createNewUser = formUser => dispatch => postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(removeCurrentUser()));