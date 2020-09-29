import React from 'react';

class HousingIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getHousings();
    }

    render() {   
        // debugger
    return (
    <div className="housing-index">
        <h1>Housings Index: </h1>
        {this.props.housings.map(housing => (
            // <div className="border-line">
            // </div>
            <div className="housing-element" key={housing.id}>
                <img src={housing.photoUrl} />
                <div>
                    <p>{housing.housing_type} in {housing.address}</p>
                    <p id="housing-name" >{housing.name}</p>
                    <p>{housing.guests} guests  {housing.bedrooms} bedroom/s {housing.beds} bed/s {housing.baths} bath/s</p>
                    <p id>${housing.price} / night</p>
                </div>
            </div>
        ))}
    </div>
    )}
};

export default HousingIndex;