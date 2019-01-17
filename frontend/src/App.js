import React, { Component } from 'react';
import logo from './logo.svg';
import Routes from './Routes';
// import './App.css';
import Nav from './Nav';
import JoblyApi from './JoblyApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: undefined, user: {} };
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
      return true;
    } else {
      this.setState({ token: undefined, user: {} });
      return false;
    }
  };

  loginSignUp = async (formData, login) => {
    let token;
    if (login) {
      // User is trying to login
      token = await JoblyApi.loginUser(formData);
    } else {
      // User is trying to sign up
      token = await JoblyApi.signUpUser(formData);
    }
    localStorage.setItem('token', token);
    return this.updateToken();
  };

  editProfile = async formData => {
    let username = this.state.user.username;
    let { password, ...data } = formData;
    let token = await JoblyApi.loginUser({ username, password });
    if (token) {
      await JoblyApi.updateUser(username, data);
      return this.updateToken();
    }
    return false;
  };

  render() {
    return (
      <div className="App">
        <Nav
          token={this.state.token}
          updateToken={this.updateToken}
          user={this.state.user}
        />
        <div className="d-flex justify-content-center">
          <Routes
            token={this.state.token}
            user={this.state.user}
            loginSignUp={this.loginSignUp}
            editProfile={this.editProfile}
          />
        </div>
      </div>
    );
  }
}

export default App;
