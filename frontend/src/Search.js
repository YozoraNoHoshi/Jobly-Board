import React, { Component } from 'react';
import _ from 'lodash';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.debouncedSearch = this.debouncedSearch.bind(this);
  }

  debouncedSearch = _.debounce(state => this.props.search(state), 300);

  handleChange = async evt => {
    await this.setState({
      [evt.target.name]: evt.target.value
    });

    this.debouncedSearch(this.state);
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.search(this.state);
  };

  render() {
    return (
      <div className="Search mt-3">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="form-group d-flex flex-nowrap">
            <input
              name="search"
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

Search.propTypes = {};

export default Search;
