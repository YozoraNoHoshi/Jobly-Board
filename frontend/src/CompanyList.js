import React, { Component } from 'react';
import CompanyCard from './CompanyCard';
import Search from './Search';
import JoblyApi from './JoblyApi';

class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = { companies: [{}, {}] };
  }

  async componentDidMount() {
    const companies = await JoblyApi.getCompanies();
    this.setState({ companies });
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  renderCompanies = companies => {
    return companies.map(c => {
      console.log(c.handle);
      return <CompanyCard key={c.handle} company={c} />;
    });
  };

  renderContent = () => {
    return (
      <div className="CompanyList">
        <Search />
        {this.renderCompanies(this.state.companies)}
      </div>
    );
  };

  render() {
    return this.state.companies ? this.renderContent() : <div>Now Loading</div>;
  }
}

CompanyList.defaultProps = {};

CompanyList.propTypes = {};

export default CompanyList;
