import React, { Component } from 'react';
import logo from './static/defaultLogo.png';
import { Link } from 'react-router-dom';

class CompanyCard extends Component {
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
      <div className="CompanyCard border mt-2 p-2">
        <Link to={`/companies/${this.props.company.handle}`}>
          <div className="company-logo d-flex justify-content-between pt-1 pb-3">
            <span className="font-weight-bold">{this.props.company.name}</span>
            <img
              src={
                this.props.company.logo_url ? this.props.company.logo_url : logo
              }
              alt={`${this.props.company.name} Logo`}
            />
          </div>

          <p>{this.props.company.description}</p>
        </Link>
      </div>
    );
  }
}

CompanyCard.defaultProps = { company: {} };

CompanyCard.propTypes = {};

export default CompanyCard;
