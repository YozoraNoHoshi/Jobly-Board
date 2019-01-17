import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return this.props.token ? this.props.component : <Redirect to="/login" />;
  }
}

PrivateRoute.defaultProps = { token: '', component: <div /> };

PrivateRoute.propTypes = {};

export default PrivateRoute;
