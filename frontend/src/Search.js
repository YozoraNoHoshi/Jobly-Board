import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  componentDidMount() {}

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.props.from === 'companies') {
      // do things
    } else {
      // do jobs things
    }
  };

  render() {
    return (
      <div className="Search mt-3">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-group col-12">
            <input
              type="text"
              placeholder="Enter Search term"
              onChange={this.handleChange}
              className="form-control search-input"
            />
            <button type="submit" className="btn btn-primary search-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Search.defaultProps = {
  from: ''
};

Search.propTypes = {};

export default Search;
