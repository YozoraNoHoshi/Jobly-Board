import React, { Component } from 'react';

class Profile extends Component {
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
    return <div className="Profile" />;
  }
}

Profile.defaultProps = {};

Profile.propTypes = {};

export default Profile;
