export const fetchHousings = () => (
    $.ajax({
        method: 'GET',
        url: 'api/housings'
    })
);

export const fetchHousing = id => (
    $.ajax({
        method: 'GET',
        url: `api/housings/${id}`
    })
);

export const makeReview = review => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
);

export const makeBooking = booking => (
    $.ajax({
        method: 'POST',
        url: 'api/bookings',
        data: { booking }
    })
);