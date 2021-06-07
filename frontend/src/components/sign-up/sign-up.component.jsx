import React from 'react';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({[name]: value})
    }

    render() {
        return(
            <div className="sign-in-container">
                <h2>Please Sign Up</h2>
                <form className="sign-in-form" onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type="text" name="email" onChange={ this.handleChange } value={this.state.email} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={ this.handleChange } value={this.state.password} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="passwordConfirmation" onChange={ this.handleChange } value={this.state.passwordConfirmation} />
                    </label>
                    <input className="submit-form" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SignUp;