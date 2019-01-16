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
      <Link to={`/companies/${this.props.company.handle}`}>
        <div className="CompanyCard">
          <div>{this.props.company.name}</div>
          <img
            src={
              this.props.company.logo_url ? this.props.company.logo_url : logo
            }
            alt={`${this.props.company.name} Logo`}
          />
          <p>{this.props.company.description}</p>
        </div>
      </Link>
    );
  }
}

CompanyCard.defaultProps = { company: {} };

CompanyCard.propTypes = {};

export default CompanyCard;
