import { connect } from 'react-redux';

import { getHousings } from '../../actions/housing_actions';
import Home from './home';

const mapStateToProps = state => ({
    housings: Object.keys(state.housings).map(key => state.housings[key])
});

const mapDispatchToProps = dispatch => ({
    getHousings: () => dispatch(getHousings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);