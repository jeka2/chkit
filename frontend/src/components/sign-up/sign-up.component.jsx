import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createUser } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            passwordConfirmation: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { username, password, passwordConfirmation } = this.state;

        this.props.createUser({ username, password, password_confirmation: passwordConfirmation })

        this.props.history.push({pathname: `/`})
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
                        Username:
                        <input type="text" name="username" onChange={ this.handleChange } value={this.state.username} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={ this.handleChange } value={this.state.password} />
                    </label>
                    <label>
                        Confirm Password:
                        <input type="password" name="passwordConfirmation" onChange={ this.handleChange } value={this.state.passwordConfirmation} />
                    </label>
                    <input className="submit-form" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null, { createUser })(SignUp));