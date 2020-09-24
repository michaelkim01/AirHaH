import React from 'react';

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

    render () {
        return (
            <div className='session-form'>
                <h2>Log in</h2>
                <form>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>

                    <button onClick={this.handleSubmit}>Log in</button>
                </form>

                Forgot password?

                More login options

                Don't have an account? Sign up
            </div>
        );
    }
};

export default Login;