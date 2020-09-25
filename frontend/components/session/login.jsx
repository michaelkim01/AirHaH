import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(this.props.closeModal);
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render () {
        return (
            <div className='session-form'>
                <button className="close-button" onClick={this.props.closeModal}>X</button>
                <header>
                    <p>Log in</p>
                </header>
                <form>
                    <input
                        placeholder="Email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                    />
                    <input
                        placeholder="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                    />
                    {this.renderErrors()}
                    <button className="submit-button" onClick={this.handleSubmit}>Log in</button>
                </form>

                <Link to='/'>Forgot password?</Link>
                <Link to='/'>More login options</Link>
                <div>
                    <text>Don't have an account?</text>
                    <Link to='/'>Sign up</Link>
                </div>
            </div>
        );
    }
};

export default Login;