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
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} token={this.props.token} />}
        />
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

        <Route
          exact
          path="/companies/:company"
          render={props => (
            <PrivateRoute
              token={this.props.token}
              user={this.props.user}
              component={
                <Company
                  token={this.props.token}
                  {...props}
                  user={this.props.user}
                />
              }
            />
          )}
        />
        <Route
          exact
          path="/jobs"
          render={props => (
            <PrivateRoute
              token={this.props.token}
              user={this.props.user}
              component={
                <JobList
                  token={this.props.token}
                  {...props}
                  user={this.props.user}
                />
              }
            />
          )}
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
          render={props => (
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
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

Routes.defaultProps = {
  token: null,
  editProfile: console.log,
  user: {},
  loginSignUp: console.log
};
export default Routes;
