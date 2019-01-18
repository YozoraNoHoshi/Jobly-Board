import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let messages;
    if (Array.isArray(this.props.message))
      messages = this.props.message.map((m, i) => (
        <div key={i} className={`alert ${this.props.classes}`}>
          {m}
        </div>
      ));
    else
      messages = (
        <div className={`alert ${this.props.classes}`}>
          {this.props.message}
        </div>
      );
    return <div>{messages}</div>;
  }
}

Alert.defaultProps = {
  classes: '',
  message: ''
};
export default Alert;
