import merge from 'lodash/merge';

import {
  RECEIVE_HOUSINGS,
  RECEIVE_HOUSING
} from '../actions/housing_actions';

const housingsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_HOUSINGS:
            return action.benches;
        case RECEIVE_HOUSING:
            const newHousing = { [action.housing.id]: action.bench };
            return merge({}, state, newHousing);
        default:
            return state;
    }
};

export default housingsReducer;
