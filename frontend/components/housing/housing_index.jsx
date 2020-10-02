import React from 'react';

class HousingIndex extends React.Component {
    constructor(props) {
        super(props);
        this.mapNode = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getHousings();
        const uluru = {lat: 73.9712, lng: 40.7831};
        this.map = new google.maps.Map(this.mapNode.current, {zoom: 4, center: uluru});
    }

    handleClick(housingId) {
        this.props.history.push(`/housings/${housingId}`);
    }

    render() {   
    return (
        <div className="housing-index-page">
            <div className="housing-index">
                <h1>Stays in New York: </h1>
                {this.props.housings.map(housing => (
                    <div className="housing-element" key={housing.id} onClick={() => this.handleClick(housing.id)}>
                        <img src={housing.photoUrl} />
                        <div>
                            <p>{housing.housing_type} in {housing.city}</p>
                            <p id="housing-name" >{housing.name}</p>
                            <p>{housing.guests} guests  {housing.bedrooms} bedroom/s {housing.beds} bed/s {housing.baths} bath/s</p>
                            <p id="housing-price">${housing.price} / night</p>
                        </div>
                    </div>
                ))}
            </div>
            <div id="map" ref={this.mapNode}></div>
        </div>
    )}
};

export default HousingIndex;