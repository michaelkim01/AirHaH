import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getHousing } from '../../actions/housing_actions';
import HousingShow from './housing_show';

const mapStateToProps = (state, ownProps) => {
    return{
        housingId: parseInt(ownProps.match.params.housingId),
        housing: state.housings[ownProps.match.params.housingId]
    }
};

const mapDispatchToProps = dispatch => {
    return{getHousing: id => dispatch(getHousing(id))}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HousingShow));