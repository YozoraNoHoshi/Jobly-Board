import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
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

  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.updateToken();
  };

  renderLoggedIn = () => {
    return (
      <React.Fragment>
        <NavLink exact to="/companies">
          Companies
        </NavLink>
        <NavLink exact to="/jobs">
          Jobs
        </NavLink>
        <NavLink exact to="/profile">
          Profile
        </NavLink>
        <span onClick={this.handleLogout}>Logout</span>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="Nav">
        <NavLink exact to="/">
          Jobly
        </NavLink>
        {this.props.token ? (
          this.renderLoggedIn()
        ) : (
          <NavLink exact to="/login">
            Login
          </NavLink>
        )}
      </div>
    );
  }
}

Nav.defaultProps = {};

Nav.propTypes = {};

export default Nav;
