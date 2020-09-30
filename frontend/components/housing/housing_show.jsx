import React from 'react';

class HousingShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getHousing(this.props.housingId);
    }

    render() {   
        const housing = this.props.housing
        if (!housing) return null;
        return (
            <div className="housing-show" key={housing.id}>                
                <p id="housing-name" >{housing.name}</p>
                <p>{housing.address}</p>
                <img src={housing.photoUrl} />
                <div>
                    <p id="host-info">{housing.housing_type} hosted by {housing.host.first_name} {housing.host.last_name} </p>
                    <p>{housing.guests} guests  {housing.bedrooms} bedroom/s {housing.beds} bed/s {housing.baths} bath/s</p>
                </div>
                <p id="housing-price">${housing.price} / night</p>
            </div>
        )}
};

export default HousingShow;