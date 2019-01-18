import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';
import Alert from './Alert';
import Search from './Search';

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [] };
  }

  async componentDidMount() {
    const jobs = await JoblyApi.getJobs();
    this.setState({ jobs });
  }

  renderJobs = jobs => {
    return jobs.length > 0 ? (
      jobs.map(j => {
        return <JobCard key={j.id} job={j} user={this.props.user} />;
      })
    ) : (
      <Alert message="No jobs found!" classes="alert-warning" />
    );
  };

  renderContent = () => {
    return (
      <div className="JobList col-8">
        <Search search={this.search} />
        {this.renderJobs(this.state.jobs)}
      </div>
    );
  };

  search = async search => {
    let jobs = await JoblyApi.getJobs(search);

    this.setState({ jobs });
  };

  render() {
    return this.state.jobs ? this.renderContent() : <div>Now Loading</div>;
  }
}

JobList.defaultProps = {};

JobList.propTypes = {};

export default JobList;
