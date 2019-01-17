import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import CompanyList from './CompanyList';
import Company from './Company';
import JobList from './JobList';
import Login from './Login';
import Profile from './Profile';
import JoblyApi from './JoblyApi';
class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
    this.props.updateToken();
  };

  editProfile = async formData => {
    let username = this.props.user.username;
    let { password, photo_url } = formData;
    if (!photo_url) {
      formData = { ...formData };
      delete formData.photo_url;
    }
    let token = await JoblyApi.loginUser({ username, password });
    if (token) {
      await JoblyApi.updateUser(username, formData);
      this.props.updateToken();
    }
  };

  render() {
    return (
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route
          exact
          path="/companies"
          render={props =>
            this.props.token ? (
              <CompanyList token={this.props.token} {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/companies/:company"
          render={props =>
            this.props.token ? (
              <Company token={this.props.token} {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/jobs"
          render={props =>
            this.props.token ? (
              <JobList token={this.props.token} {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/login"
          render={props => <Login loginSignUp={this.loginSignUp} {...props} />}
        />
        <Route
          exact
          path="/profile"
          render={props =>
            this.props.token ? (
              <Profile
                editProfile={this.editProfile}
                token={this.props.token}
                user={this.props.user}
                {...props}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

Routes.defaultProps = {};
export default Routes;
