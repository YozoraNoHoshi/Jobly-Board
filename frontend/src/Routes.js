import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import CompanyList from './CompanyList';
import Company from './Company';
import JobList from './JobList';
import Login from './Login';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute';
class Routes extends Component {
  // loginSignUp = async (formData, login) => {
  //   let token;
  //   if (login) {
  //     // User is trying to login
  //     token = await JoblyApi.loginUser(formData);
  //   } else {
  //     // User is trying to sign up
  //     token = await JoblyApi.signUpUser(formData);
  //   }
  //   localStorage.setItem('token', token);
  //   return this.props.updateToken();
  // };

  // editProfile = async formData => {
  //   let username = this.props.user.username;
  //   let { password, ...data } = formData;
  //   let token = await JoblyApi.loginUser({ username, password });
  //   if (token) {
  //     await JoblyApi.updateUser(username, data);
  //     return this.props.updateToken();
  //   }
  //   return false;
  // };

  render() {
    return (
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route
          exact
          path="/companies"
          render={props => (
            <PrivateRoute
              token={this.props.token}
              component={<CompanyList token={this.props.token} {...props} />}
            />
          )}
        />
        {/* <Route
          exact
          path="/companies"
          render={props =>
            this.props.token ? (
              <CompanyList token={this.props.token} {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        /> */}
        <Route
          exact
          path="/companies/:company"
          render={
            props => (
              <PrivateRoute
                token={this.props.token}
                component={<Company token={this.props.token} {...props} />}
              />
            )
            // this.props.token ? (
            //   <Company token={this.props.token} {...props} />
            // ) : (
            //   <Redirect to="/login" />
            // )
          }
        />
        <Route
          exact
          path="/jobs"
          render={
            props => (
              <PrivateRoute
                token={this.props.token}
                component={<JobList token={this.props.token} {...props} />}
              />
            )
            // this.props.token ? (
            //   <JobList token={this.props.token} {...props} />
            // ) : (
            //   <Redirect to="/login" />
            // )
          }
        />
        <Route
          exact
          path="/login"
          render={props =>
            this.props.token ? (
              <Redirect to="/" />
            ) : (
              <Login loginSignUp={this.props.loginSignUp} {...props} />
            )
          }
        />
        <Route
          exact
          path="/profile"
          render={
            props => (
              <PrivateRoute
                token={this.props.token}
                component={
                  <Profile
                    editProfile={this.props.editProfile}
                    token={this.props.token}
                    user={this.props.user}
                    {...props}
                  />
                }
              />
            )

            // this.props.token ? (
            //   <Profile
            //     editProfile={this.props.editProfile}
            //     token={this.props.token}
            //     user={this.props.user}
            //     {...props}
            //   />
            // ) : (
            //   <Redirect to="/login" />
            // )
          }
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

Routes.defaultProps = {
  token: '',
  editProfile: console.log,
  user: {},
  loginSignUp: console.log
};
export default Routes;
