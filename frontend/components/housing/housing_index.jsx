import React from 'react';

const HousingIndex = ({ housings }) => (
    <div>
        <h1>Housings: </h1>
        {housings.map(housing => (
            housing.id,
            housing.name
        ))}
    </div>
);

export default HousingIndex;