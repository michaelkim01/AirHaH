import {
    fetchHousings,
    fetchHousing,
    makeReview,
    makeBooking
} from '../utils/housing_util';

export const RECEIVE_HOUSINGS = 'RECEIVE_HOUSINGS';
export const RECEIVE_HOUSING = 'RECEIVE_HOUSING';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';

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

export const receiveReview = ({ review, average_rating }) => ({
    type: RECEIVE_REVIEW,
    review,
    average_rating,
});

export const receiveBooking = ({ booking }) => ({
    type: RECEIVE_BOOKING,
    booking,
});


export const createBooking = booking => dispatch => (
    makeBooking(booking).then(booking => (
        dispatch(receiveBooking(booking))
    ))
);

export const createReview = review => dispatch => (
    makeReview(review).then(review => (
        dispatch(receiveReview(review))
    ))
);

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