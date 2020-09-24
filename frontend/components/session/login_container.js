import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Login from './login';

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(Login);