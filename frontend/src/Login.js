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

  componentDidMount() {}

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    let { login, ...state } = this.state;
    console.log(this.state);
    this.props.loginSignUp(state, login);
    this.props.history.push('/');
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
        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={this.handleChange}
          name="username"
          value={this.state.username}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          onChange={this.handleChange}
          name="password"
          value={this.state.password}
        />
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          onChange={this.handleChange}
          name="first_name"
          value={this.state.first_name}
        />
        <label htmlFor="last_name">lastName</label>
        <input
          type="text"
          onChange={this.handleChange}
          name="last_name"
          value={this.state.last_name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
        />
        <button type="submit">Submit</button>
      </form>
    );
  };

  renderLogin = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={this.handleChange}
          name="username"
          value={this.state.username}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          onChange={this.handleChange}
          name="password"
          value={this.state.password}
        />
        <button type="submit">Submit</button>
      </form>
    );
  };

  render() {
    return (
      <div className="Login">
        <div>
          <div onClick={this.handleClick}>Login</div>
          <div onClick={this.handleClick}>Sign Up</div>
        </div>
        {this.state.login ? this.renderLogin() : this.renderSignup()}
      </div>
    );
  }
}

Login.defaultProps = { loginSignUp: console.log };

Login.propTypes = {};

export default Login;
