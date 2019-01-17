import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = { company: {} };
  }

  async componentDidMount() {
    console.log(this.props);
    try {
      let company = await JoblyApi.getCompany(this.props.match.params.company);
      this.setState({ company });
    } catch (error) {}
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
    return jobs.map(j => {
      return <JobCard key={j.id} job={j} />;
    });
  };
  renderContent = () => {
    return (
      <div className="Company col-6 mt-2">
        <h3>{this.state.company.name}</h3>
        <p>{this.state.company.description}</p>
        <div>{this.renderJobs(this.state.company.jobs)}</div>
      </div>
    );
  };

  render() {
    return this.state.company.handle ? (
      this.renderContent()
    ) : (
      <div>Now Loading</div>
    );
  }
}

Company.defaultProps = {
  handle: ''
};

Company.propTypes = {};

export default Company;
