import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import CompanyList from './CompanyList';
import Company from './Company';
import JobList from './JobList';
import Login from './Login';
import Profile from './Profile';
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route
          exact
          path="/companies"
          render={props => <CompanyList {...props} />}
        />
        <Route
          exact
          path="/companies/:company"
          render={props => <Company {...props} />}
        />
        <Route exact path="/jobs" render={props => <JobList {...props} />} />
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/profile" render={props => <Profile {...props} />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

Routes.defaultProps = {};
export default Routes;
