import React from 'react';
import { Link } from 'react-router-dom';

class HousingIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getHousings();
    }

    handleButtonClick() {
        this.props.history.push(`/housings/`);
    }

    handleClick(housingId) {
        this.props.history.push(`/housings/${housingId}`);
    }

    render() {
        return (
            <div id="home-page">
                <div className="content-header">
                    <div>
                        <h1>Go Near</h1>
                        <p id="settle-in">Settle in somewhere new. Discover stays to live, work, or just relax.</p>
                        <button onClick={() => this.handleButtonClick()}>Explore nearby</button>
                    </div>
                </div>
                <div id="cards-container">
                    {this.props.housings.map(housing => (
                        <div className="card" key={housing.id} onClick={() => this.handleClick(housing.id)}>
                            <img src={housing.photoUrl} />
                            <div>
                                <h3>{housing.housing_type} in {housing.city}</h3>
                                <p id="housing-name" >{housing.name}</p>
                                <p>{housing.guests} guests  {housing.bedrooms} bedroom/s {housing.beds} bed/s {housing.baths} bath/s</p>
                                <p id="housing-price">${housing.price} / night</p>
                            </div>
                        </div>
                    ))}
                </div>

                <footer>
                    <div id="left-div">
                        <p>c 2020 Airbnb, Inc. All rights reserved</p>
                        <a href="https://github.com/michaelkim01/AirHaH">Github</a>
                        <p>linkdIn</p>
                        <p>Sitemap</p>
                    </div>
                    <div id="right-div">
                        <p>English</p>
                        <p>$ USD</p>
                        <p>Facbook Icon</p>
                        <p>Twitter Icon</p>
                        <p>Instagram Icon</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default HousingIndex;