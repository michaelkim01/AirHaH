import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(Signup);