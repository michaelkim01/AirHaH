import {
    fetchHousings,
    fetchHousing,
} from '../utils/housing_util';

export const RECEIVE_HOUSINGS = 'RECEIVE_HOUSINGS';
export const RECEIVE_HOUSING = 'RECEIVE_HOUSING';

export const receiveHousings = housings => {
    return {
        type: RECEIVE_HOUSINGS,
        housings
    }
};
  
export const receiveHousing = housing => ({
    type: RECEIVE_HOUSING,
    housing
});

export const getHousings = () => dispatch => (
    fetchHousings().then(housings => (
        dispatch(receiveHousings(housings))
    ))
);

export const getHousing = id => dispatch => (
    fetchHousing(id).then(payload => (
        dispatch(receiveHousing(payload))
    ))
);