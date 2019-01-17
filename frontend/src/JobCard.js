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

  handleClick = evt => {
    evt.preventDefault();
  };

  render() {
    return (
      <div className="JobCard border mt-2 p-2">
        <p className="font-weight-bold">{this.props.job.title}</p>
        <div>Salary: {this.props.job.salary}</div>
        <div>Equity: {this.props.job.equity}</div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger font-weight-bold">APPLY</button>
        </div>
      </div>
    );
  }
}

JobCard.defaultProps = {
  job: {}
};

JobCard.propTypes = {};

export default JobCard;
