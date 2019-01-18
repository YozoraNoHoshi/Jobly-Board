import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div
        id="HOME"
        className="Home d-flex flex-column justify-content-center align-items-center"
      >
        <h1 className="border-text font-weight-bold">Jobly</h1>
        <p className="border-text">All the jobs in one, convenient place.</p>
        {this.props.token !== null ? (
          <h2 className="border-text">Welcome Back!</h2>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
