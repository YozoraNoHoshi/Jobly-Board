import React, { Component } from 'react';
import logo from './logo.svg';
import Routes from './Routes';
import './App.css';
import Nav from './Nav';
import JoblyApi from './JoblyApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: '', user: {} };
  }
  componentDidMount() {
    this.updateToken();
  }

  updateToken = async () => {
    let token = localStorage.getItem('token');
    if (token) {
      let decodeToken = token.split('.')[1];
      let { username } = JSON.parse(atob(decodeToken));
      let user = await JoblyApi.getUser(username);
      this.setState({ token, user });
    } else {
      this.setState({ token: '', user: {} });
    }
  };

  render() {
    return (
      <div className="App">
        <Nav
          updateToken={this.updateToken}
          token={this.state.token}
          user={this.state.user}
        />
        <Routes
          updateToken={this.updateToken}
          token={this.state.token}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default App;
