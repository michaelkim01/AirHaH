import React from 'react';

class HousingIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getHousings();
    }

    handleClick(housingId) {
        // debugger
        this.props.history.push(`/housings/${housingId}`);
    }

    render() {   
    return (
        <div className="housing-index">
            <h1>Housings Index: </h1>
            {this.props.housings.map(housing => (
                <div className="housing-element" key={housing.id} onClick={() => this.handleClick(housing.id)}>
                    <img src={housing.photoUrl} />
                    <div>
                        <p>{housing.housing_type} in {housing.address}</p>
                        <p id="housing-name" >{housing.name}</p>
                        <p>{housing.guests} guests  {housing.bedrooms} bedroom/s {housing.beds} bed/s {housing.baths} bath/s</p>
                        <p id="housing-price">${housing.price} / night</p>
                    </div>
                </div>
            ))}
        </div>
    )}
};

export default HousingIndex;