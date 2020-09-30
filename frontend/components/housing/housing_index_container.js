import { connect } from 'react-redux';

import { getHousings } from '../../actions/housing_actions';
import HousingIndex from './housing_index';

const mapStateToProps = state => ({
    housings: Object.keys(state.housings).map(key => state.housings[key])
});

const mapDispatchToProps = dispatch => ({
    getHousings: () => dispatch(getHousings())
});

export default connect(mapStateToProps, mapDispatchToProps)(HousingIndex);
