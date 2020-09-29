export const getHousings = data => (
    $.ajax({
        method: 'GET',
        url: 'api/housings',
        data
    })
);

export const getHousing = id => (
    $.ajax({
        method: 'GET',
        url: `api/housings/${id}`
    })
);