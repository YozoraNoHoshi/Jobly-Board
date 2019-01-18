import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: ''
    };
  }

  // componentDidMount() {}

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    let { login, ...state } = this.state;
    let success = await this.props.loginSignUp(state, login);
    if (success) this.props.history.push('/');
  };

  handleClick = evt => {
    // use evt to change classes for styling
    this.setState(st => {
      return { login: !st.login };
    });
  };

  renderSignup = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="font-weight-bold">
            Username
          </label>
          <input
            type="text"
            onChange={this.handleChange}
            name="username"
            value={this.state.username}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="font-weight-bold">
            Password
          </label>
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="first_name" className="font-weight-bold">
            First Name
          </label>
          <input
            type="text"
            onChange={this.handleChange}
            name="first_name"
            value={this.state.first_name}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name" className="font-weight-bold">
            Last Name
          </label>
          <input
            type="text"
            onChange={this.handleChange}
            name="last_name"
            value={this.state.last_name}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="font-weight-bold">
            Email
          </label>
          <input
            type="text"
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
            className="form-control"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  };

  renderLogin = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="font-weight-bold">
            Username
          </label>
          <input
            type="text"
            onChange={this.handleChange}
            name="username"
            value={this.state.username}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="font-weight-bold">
            Password
          </label>
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            className="form-control"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  };

  render() {
    return (
      <div className="Login d-flex flex-column col-3 mt-3">
        <div className="d-flex flex-row justify-content-end">
          <div
            onClick={this.handleClick}
            className={
              this.state.login
                ? 'btn btn-primary login-button active'
                : 'btn btn-primary login-button'
            }
          >
            Login
          </div>
          <div
            onClick={this.handleClick}
            className={
              !this.state.login
                ? 'btn btn-primary signup-button active'
                : 'btn btn-primary signup-button'
            }
          >
            Sign Up
          </div>
        </div>
        <div className="login-form border rounded p-3">
          {this.state.login ? this.renderLogin() : this.renderSignup()}
        </div>
      </div>
    );
  }
}

Login.defaultProps = { loginSignUp: console.log };

Login.propTypes = {};

export default Login;
