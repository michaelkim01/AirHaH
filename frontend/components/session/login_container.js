import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Login from './login';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'login',
});

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    removeErrors: () => dispatch(removeErrors()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);