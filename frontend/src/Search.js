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
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Search term"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
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
