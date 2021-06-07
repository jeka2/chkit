import React from 'react';
import { connect } from 'react-redux';
import { logUserIn } from '../../redux/user/user.actions';
import { withRouter } from 'react-router';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { username, password} = this.state;

        this.props.logUserIn({ username, password })

        this.props.history.push({pathname: `/`})
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({[name]: value})
    }

    render() {
        return(
            <div className="sign-in-container">
                <h2>Please Sign In</h2>
                <form className="sign-in-form" onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" name="username" onChange={ this.handleChange } value={this.state.username} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={ this.handleChange } value={this.state.password} />
                    </label>
                    <input className="submit-form" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null, { logUserIn })(SignIn));