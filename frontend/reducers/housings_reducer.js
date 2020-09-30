import merge from 'lodash/merge';

import {
  RECEIVE_HOUSINGS,
  RECEIVE_HOUSING
} from '../actions/housing_actions';

const housingsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_HOUSINGS:
            return action.housings;
        case RECEIVE_HOUSING:
            return merge({}, state, action.housing);
        default:
            return state;
    }
};

export default housingsReducer;
