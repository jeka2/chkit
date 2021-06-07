import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
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
                <h2>Please Sign In</h2>
                <form className="sign-in-form" onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type="text" name="email" onChange={ this.handleChange } value={this.state.email} />
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

export default SignIn;