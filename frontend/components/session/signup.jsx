import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            birthdate: new Date(0),
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
        this.props.createNewUser(this.state)
            .then(this.props.closeModal);
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

    componentWillUnmount() {
        this.props.removeErrors();
    }

    render () {
        return (
            <div className='session-form'>
                <button className="close-button" onClick={this.props.closeModal}>X</button>
                <header>
                    <p>Sign up</p>
                </header>
                <form>
                    <input
                        placeholder="First name"
                        type="text"
                        value={this.state.first_name}
                        onChange={this.handleInput('first_name')}
                    />
                    <input
                        placeholder="Last name"
                        type="text"
                        value={this.state.last_name}
                        onChange={this.handleInput('last_name')}
                    />
                    <text>Make sure it matches the name on your government ID.</text>
                    <input
                        placeholder="Birthdate"
                        type="date"
                        value={this.state.birthdate}
                        onChange={this.handleInput('birthdate')}
                    />
                
                    <text>To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb.</text>
                    <input
                        placeholder="Email address"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                    />
                    <text>We'll email you trip confirmations and receipts.</text>
                    <input
                        placeholder="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                    />
                    <text>By selecting Agree and continue below, I agree to Airbnb’s Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.</text>

                    {this.renderErrors()}
                    <button className="submit-button" onClick={this.handleSubmit}>Agree and continue</button>
                </form>
            </div>
        );
    }
};

export default Signup;