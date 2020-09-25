import { connect } from 'react-redux';
import { createNewUser, removeErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Signup from './signup';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'signup',
});

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    removeErrors: () => dispatch(removeErrors()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);