import React, { Component } from 'react';

class Login extends Component {
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
    return <div className="Login" />;
  }
}

Login.defaultProps = {};

Login.propTypes = {};

export default Login;
