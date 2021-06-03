import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TestComponent from './components/text.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      user: {}
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3001/users/1')
      .then(res => res.json())
      .then(data => console.log(data))
    console.log('hi')
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
        <Router>
          <Switch>
            <Route exact path='/' component={TestComponent} />
            <Route exact path='/login' component={TestComponent} />
            <Route exact path='/signup' component={TestComponent} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
