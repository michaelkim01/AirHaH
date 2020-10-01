import React from 'react';

const mapOptions = {
    center: {
        lat: 37.773972,
        lng: -122.431297
    }, // San Francisco coords
    zoom: 13
};

class HousingMap extends React.Component {
    render() {
        return (
            <div className="map" ref="map">
                Map
            </div>
        );
    }
}

export default HousingMap;