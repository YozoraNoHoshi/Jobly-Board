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
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/companies">
            Companies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={this.handleLogout}>
            Logout
          </span>
        </li>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="Nav">
        <nav className="navbar d-flex navbar-expand-lg navbar-light border-bottom">
          <NavLink className="navbar-brand" exact to="/">
            Jobly
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {this.props.token ? (
                <div className="d-flex justify-content-end">
                  {this.renderLoggedIn()}
                </div>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/login">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Nav.defaultProps = {};

Nav.propTypes = {};

export default Nav;
