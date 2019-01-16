import React, { Component } from 'react';

class JobCard extends Component {
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
      <div className="JobCard">
        <div>{this.props.job.title}</div>
        <div>Salary: {this.props.job.salary}</div>
        <div>Equity: {this.props.job.equity}</div>
        <button>Apply</button>
      </div>
    );
  }
}

JobCard.defaultProps = {
  job: {}
};

JobCard.propTypes = {};

export default JobCard;
