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
        <NavLink exact to="/">
          Logout
        </NavLink>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="Nav">
        <NavLink exact to="/">
          Jobly
        </NavLink>
        {this.props.loggedIn ? (
          this.renderLoggedIn()
        ) : (
          <NavLink exact to="/">
            Login
          </NavLink>
        )}
      </div>
    );
  }
}

Nav.defaultProps = {
  loggedIn: true
};

Nav.propTypes = {};

export default Nav;
