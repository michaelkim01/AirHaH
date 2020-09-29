import {
    getHousings,
    getHousing,
} from '../utils/housing_util';

export const RECEIVE_HOUSINGS = 'RECEIVE_HOUSINGS';
export const RECEIVE_HOUSING = 'RECEIVE_HOUSING';

export const receiveHousings = housings => ({
    type: RECEIVE_HOUSINGS,
    housings
});
  
export const receiveHousing = housing => ({
    type: RECEIVE_HOUSING,
    housing
});

export const getHousings = dispatch => (
    getHousings().then(housings => (
        dispatch(receiveHousings(housings))
    ))
);

export const getHousing = id => dispatch => (
    getHousing(id).then(payload => (
        dispatch(receiveHousing(payload))
    ))
);