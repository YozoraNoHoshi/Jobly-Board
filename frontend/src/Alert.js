import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={`alert ${this.props.classes}`}>{this.props.message}</div>
    );
  }
}

export default Alert;
