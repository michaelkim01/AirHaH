import React from 'react';

class HousingShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 5,
            body: ""
        };
        this.mapNode = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    refresh() {
        this.props.history.push(`/housings/${this.props.match.params.housingId}`);
    }    

    componentDidMount() {
        this.props.getHousing(this.props.housingId);
        // const location = {lat: this.props.housing.lat, lng: this.props.housing.lng};
        // const map = new google.maps.Map(this.mapNode.current, {zoom: 10, center: location});
        // const marker = new google.maps.Marker({position: location, map: map});
    }

    handleSubmit(e) {
        e.preventDefault();
        const housingId = parseInt(this.props.match.params.housingId);
        const authorId = window.currentUser.id;
        const review = Object.assign({}, this.state, {
           housing_id: housingId,
           author_id: authorId
        });
        debugger
        this.props.createReview(review);
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
                <div>
                    <p id="housing-name" >{housing.name}</p>
                    <div className="housing-name-header">
                        <div className="average-rating">
                            <i class="fas fa-star"></i>
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
                <div className="review-form">
                    <form onSubmit={this.handleSubmit}>
                        <label>Rating</label>
                        <input
                            type="number"
                            value={this.state.rating}
                            onChange={this.update("rating")}
                        />
                        <label>Comment</label>
                        <textarea
                            cols="30"
                            rows="10"
                            value={this.state.body}
                            onChange={this.update("body")}
                        />
                        <input type="submit" />
                    </form>
                </div>
                {/* <div id="map" ref={this.mapNode}></div> */}
            </div>
        )}
};

export default HousingShow;