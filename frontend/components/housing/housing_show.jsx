import React from 'react';

class HousingShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 5,
            body: "",
            start_date: new Date(0),
            end_date: new Date(0)
        };
        this.mapNode = React.createRef();
        this.handleReviewFormSubmit = this.handleReviewFormSubmit.bind(this);
        this.handleBookingFormSubmit = this.handleBookingFormSubmit.bind(this);
    }

    refresh() {
        window.location.reload(false);
    }    

    componentDidMount() {
        const housingId = this.props.housingId
        this.props.getHousing(housingId).then((action) => {
            const housing = action.housing[housingId];
            const location = {lat: parseFloat(housing.lat), lng: parseFloat(housing.lng)};
            this.map = new google.maps.Map(this.mapNode.current, {zoom: 12, center: location});
            const marker = new google.maps.Marker({position: location, map: this.map});
        });
    }

    handleReviewFormSubmit(e) {
        e.preventDefault();
        const housingId = parseInt(this.props.match.params.housingId);
        const authorId = window.currentUser.id;
        const review = Object.assign({}, this.state, {
           housing_id: housingId,
           author_id: authorId
        });
        this.props.createReview(review);
        this.refresh();
    }

    handleBookingFormSubmit(e) {
        e.preventDefault();
        const housingId = parseInt(this.props.match.params.housingId);
        const guestId = window.currentUser.id;
        const booking = Object.assign({}, this.state, {
           housing_id: housingId,
           guest_id: guestId
        });
        this.props.createBooking(booking);
        this.refresh();
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    render() {   
        const housing = this.props.housing
        if (!housing) return null;
        return (
            <div className="housing-show" key={housing.id}>                
                <div className="housing">
                    <p id="housing-name" >{housing.name}</p>
                    <div className="housing-name-header">
                        <div className="average-rating">
                            <i className="fas fa-star"></i>
                            <h3>{housing.average_rating} ({housing.reviews.length})</h3>
                        </div>
                        <p>{housing.address}</p>
                    </div>
                    <img src={housing.photoUrl} />
                    <div className="housing-info">
                        <div>
                            <p id="host-info">{housing.housing_type} hosted by {housing.host.first_name} {housing.host.last_name} </p>
                            <p>{housing.guests} guests  {housing.bedrooms} bedroom/s {housing.beds} bed/s {housing.baths} bath/s</p>
                        </div>
                        <h4 id="housing-price">${housing.price} / night</h4>
                    </div>
                </div>
                <h2>Reservations</h2>
                <div className="bookings">
                    <div className="bookings-list">
                        {this.props.housing.bookings.map(booking => (
                            <div className="booking-element" key={booking.id}>
                                <div className="booking-guest">
                                    <div className="guest-info">
                                        <h4>{this.props.housing[booking.id].guest.first_name} </h4>
                                    </div>
                                </div>
                                <div className="booking-body">
                                    <h5>From {booking.start_date}</h5>
                                    <h5>To {booking.end_date}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    {window.currentUser 
                        ? <div className="booking-form">
                            <form onSubmit={this.handleBookingFormSubmit}>
                                <label>CHECK-IN</label>
                                <input
                                    type="date"
                                    value={this.state.start_date}
                                    onChange={this.update("start_date")}
                                />
                                <label>CHECK-OUT</label>
                                <input
                                    type="date"
                                    value={this.state.end_date}
                                    onChange={this.update("end_date")}
                                />
                                <input type="submit" />
                            </form>
                        </div>
                        : <div></div>
                    }
                </div>

                <div className="reviews">
                    <div className="average-rating">
                        <i className="fas fa-star"></i>
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
                {window.currentUser 
                    ? <div className="review-form">
                        <form onSubmit={this.handleReviewFormSubmit}>
                            <label>Rating</label>
                            <input
                                type="number"
                                min="1"
                                max="5"
                                value={this.state.rating}
                                onChange={this.update("rating")}
                            />
                            <label>Comment</label>
                            <textarea
                                cols="80"
                                rows="10"
                                value={this.state.body}
                                onChange={this.update("body")}
                            />
                            <input type="submit" />
                        </form>
                    </div>
                    : <div></div>
                }
                <div id="map" ref={this.mapNode}></div>
            </div>
        )}
};

export default HousingShow;