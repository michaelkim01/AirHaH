import React from 'react';

class HousingShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.getHousing(this.props.housingId);
    }

    render() {   
        debugger
        return (
            <div className="housing-show">
                <h1>Housings Show: </h1>
                    <div className="housing-element" key={housingId}>
                        <img src={housing.photoUrl} />
                        <div>
                            <p>{housing.housing_type} in {housing.address}</p>
                            <p id="housing-name" >{housing.name}</p>
                            <p>{housing.guests} guests  {housing.bedrooms} bedroom/s {housing.beds} bed/s {housing.baths} bath/s</p>
                            <p id="housing-price">${housing.price} / night</p>
                        </div>
                    </div>
            </div>
        )}
};

export default HousingShow;