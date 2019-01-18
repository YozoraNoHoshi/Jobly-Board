import React, { Component } from 'react';
import CompanyCard from './CompanyCard';
import Search from './Search';
import Alert from './Alert';
import JoblyApi from './JoblyApi';

class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = { companies: [] };
  }

  async componentDidMount() {
    try {
      const companies = await JoblyApi.getCompanies();
      this.setState({ companies });
    } catch (error) {
      this.props.setAlert();
    }
  }

  renderCompanies = companies => {
    return companies.length > 0 ? (
      companies.map(c => {
        return <CompanyCard key={c.handle} company={c} />;
      })
    ) : (
      <Alert message="No companies found!" classes="alert-warning" />
    );
  };

  renderContent = () => {
    let alert;
    if (this.props.alertMsg.length > 0) {
      console.log(this.props.alertMsg);
      alert = <Alert classes="alert-danger" message={this.props.alertMsg} />;
    }
    return (
      <div className="CompanyList col-8">
        <Search search={this.search} />
        {alert}
        {this.renderCompanies(this.state.companies)}
      </div>
    );
  };

  search = async search => {
    let companies = await JoblyApi.getCompanies(search);
    this.setState({ companies });
  };

  render() {
    return this.state.companies ? this.renderContent() : <div>Now Loading</div>;
  }
}

CompanyList.defaultProps = {
  alert: ''
};

CompanyList.propTypes = {};

export default CompanyList;
