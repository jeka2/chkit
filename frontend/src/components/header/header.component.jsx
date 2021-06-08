import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { userLoggedIn } from '../../redux/user/user.selectors';
import { Link, withRouter } from 'react-router-dom';

import './header.styles.scss'

const Header = ({ userLoggedIn }) => (
    <div className="header">
        <Link className="logo-container" to="/">
           Home
        </Link>
        <div className="options">
            {
                userLoggedIn ? 
                <Link className="option" to="/logout">
                    Log Out
                </Link> :
                <Link className="option" to="/login">
                    Log In
                </Link>
            }
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    userLoggedIn: userLoggedIn
})

export default withRouter(connect(mapStateToProps)(Header));