import React, { Component } from 'react';
import JoblyApi from './JoblyApi';

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = { apply: false };
  }

  componentDidMount() {
    if (this.props.user.jobs) {
      let appliedJobs = this.props.user.jobs.find(job => {
        return job.id === this.props.job.id;
      });
      if (appliedJobs) {
        this.setState({ apply: true });
      }
    }
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleClick = async evt => {
    evt.preventDefault();
    let response = await JoblyApi.applyJob(this.props.job.id);

    if (response) {
      this.setState({ apply: true });
    }
  };

  render() {
    return (
      <div className="JobCard border mt-2 p-2">
        <p className="font-weight-bold">{this.props.job.title}</p>
        <div>Salary: {this.props.job.salary}</div>
        <div>Equity: {this.props.job.equity}</div>
        <div className="d-flex justify-content-end">
          {!this.state.apply ? (
            <button
              onClick={this.handleClick}
              className="btn btn-danger font-weight-bold"
            >
              APPLY
            </button>
          ) : (
            <button className="btn btn-danger font-weight-bold disabled">
              APPLIED
            </button>
          )}
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
