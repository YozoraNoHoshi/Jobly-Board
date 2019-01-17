import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
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
    return (
      <div className="Home d-flex flex-column justify-content-center align-items-center">
        <h1 className="font-weight-bold">Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        {this.props.token !== null ? (
          <h2>Welcome Back!</h2>
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
