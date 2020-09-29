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