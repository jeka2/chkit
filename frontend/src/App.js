import './App.scss';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TestComponent from './components/text.component';
import { authenticateUser, createUser } from './redux/user/user.actions';
import { getPosts } from './redux/post/post.actions';
import FrontPage from './pages/front-page/front-page.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      user: {}
    }
  }

  componentDidMount() {
    //this.props.authenticateUser()
  }

  handleLogin = (data) => {
    this.setState({
      loggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      loggedIn: false,
      user: {}
    })
  }

  render() {
    return(
      <div>
        <button onClick={() => this.props.createUser()}>Create User</button>
        <button onClick={() => this.props.authenticateUser()}>Authenticate User</button>
        <button onClick={() => this.props.getPosts()}>Get Posts</button>
        <Router>
          <Switch>
            <Route exact path='/' component={FrontPage} />
            <Route exact path='/login' component={TestComponent} />
            <Route exact path='/signup' component={TestComponent} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default connect(null, { authenticateUser, createUser, getPosts })(App);
