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
                <div>
                    <p id="housing-name" >{housing.name}</p>
                    <p>{housing.address}</p>
                    <img src={housing.photoUrl} />
                    <div>
                        <p id="host-info">{housing.housing_type} hosted by {housing.host.first_name} {housing.host.last_name} </p>
                        <p>{housing.guests} guests  {housing.bedrooms} bedroom/s {housing.beds} bed/s {housing.baths} bath/s</p>
                    </div>
                    <p id="housing-price">${housing.price} / night</p>
                </div>
                <div className="reviews">
                    <div className="average-rating">
                        <i class="fas fa-star"></i>
                        <h3>{housing.average_rating} ({housing.reviews.length} reviews)</h3>
                    </div>
                    <div className="review-element-container">
                        {this.props.housing.reviews.map(review => (
                            <div className="review-element" key={review.id}>
                                <div className="review-author">
                                    <h2>{review.rating} / 5</h2>
                                    <div className="author-info">
                                        <h4>{this.props.housing[review.id].author.first_name} </h4>
                                        <p>{review.created_at}</p>
                                    </div>
                                </div>
                                <div className="review-body">
                                    <h5>{review.body}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
};

export default HousingShow;