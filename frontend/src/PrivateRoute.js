import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    return this.props.token !== null ? (
      this.props.component
    ) : (
      <Redirect to="/login" />
    );
  }
}

PrivateRoute.defaultProps = { token: '', component: <div /> };

export default PrivateRoute;
