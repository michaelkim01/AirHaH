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
            .then( () => this.props.history.push(''));
    }

    render () {
        return (
            <div className='session-form'>
                <h2>Finish signing up</h2>
                <form>
                    <label>First name:
                        <input
                            type="text"
                            value={this.state.first_name}
                            onChange={this.handleInput('first_name')}
                        />
                    </label>
                    <label>Last name:
                        <input
                            type="text"
                            value={this.state.last_name}
                            onChange={this.handleInput('last_name')}
                        />
                    </label>
                    Make sure it matches the name on your government ID.
                    <label>Birthdate:
                        <input
                            type="date"
                            value={this.state.birthdate}
                            onChange={this.handleInput('birthdate')}
                        />
                    </label>
                    To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb.
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    We'll email you trip confirmations and receipts.
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>

                    By selecting Agree and continue below, I agree to Airbnb’s Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.

                    <button onClick={this.handleSubmit}>Agree and continue</button>
                </form>
            </div>
        );
    }
};

export default Signup;