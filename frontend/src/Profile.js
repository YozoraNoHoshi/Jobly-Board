import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      email: this.props.user.email,
      photo_url: this.props.user.photo_url || '',
      password: ''
    };
  }

  componentDidMount() {}

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    let { photo_url, ...state } = this.state;
    if (photo_url) {
      state.photo_url = photo_url;
    }
    let success = await this.props.editProfile(state);
    if (success) this.props.history.push('/');
  };

  render() {
    return (
      <div className="Profile">
        <div>Profile</div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <div>{this.props.user.username}</div>
          <label htmlFor="first_name">First Name</label>
          <input
            name="first_name"
            type="text"
            onChange={this.handleChange}
            value={this.state.first_name}
          />
          <label htmlFor="last_name">Last Name</label>
          <input
            name="last_name"
            type="text"
            onChange={this.handleChange}
            value={this.state.last_name}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label htmlFor="photo_url">Photo URL</label>
          <input
            name="photo_url"
            type="text"
            onChange={this.handleChange}
            value={this.state.photo_url}
          />
          <label htmlFor="password">Re-enter Password</label>
          <input
            name="password"
            type="text"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Profile.defaultProps = { user: {} };

Profile.propTypes = {};

export default Profile;
