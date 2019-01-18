import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      email: this.props.user.email,
      photo_url: this.props.user.photo_url || '',
      password: '',
      confirm_password: ''
    };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    let { photo_url, confirm_password, password, ...state } = this.state;
    if (photo_url) {
      state.photo_url = photo_url;
    }
    if (password) {
      state.password = password;
    }
    let success = await this.props.editProfile(state, confirm_password);
    if (success) this.props.history.push('/');
  };

  render() {
    return (
      <div className="Profile border rounded p-3 mt-3 col-4">
        <h2>Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="font-weight-bold">
              Username
            </label>
            <div>{this.props.user.username}</div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="font-weight-bold">
              Password
            </label>
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="first_name" className="font-weight-bold">
              First Name
            </label>
            <input
              name="first_name"
              type="text"
              onChange={this.handleChange}
              value={this.state.first_name}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name" className="font-weight-bold">
              Last Name
            </label>
            <input
              name="last_name"
              type="text"
              onChange={this.handleChange}
              value={this.state.last_name}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="font-weight-bold">
              Email
            </label>
            <input
              name="email"
              type="text"
              onChange={this.handleChange}
              value={this.state.email}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo_url" className="font-weight-bold">
              Photo URL
            </label>
            <input
              name="photo_url"
              type="text"
              onChange={this.handleChange}
              value={this.state.photo_url}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm_password" className="font-weight-bold">
              Re-enter Password
            </label>
            <input
              name="confirm_password"
              type="password"
              onChange={this.handleChange}
              value={this.state.confirm_password}
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className={
              this.state.confirm_password.length > 0
                ? 'btn btn-primary btn-lg btn-block'
                : 'btn btn-primary btn-lg btn-block disabled'
            }
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

Profile.defaultProps = { user: {} };

Profile.propTypes = {};

export default Profile;
