import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';
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

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  renderJobs = jobs => {
    return jobs.map(j => <JobCard key={j.id} job={j} user={this.props.user} />);
  };

  renderContent = () => {
    return (
      <div className="JobList col-8">
        <Search />
        {this.renderJobs(this.state.jobs)}
      </div>
    );
  };

  render() {
    return this.state.jobs ? this.renderContent() : <div>Now Loading</div>;
  }
}

JobList.defaultProps = {};

JobList.propTypes = {};

export default JobList;
