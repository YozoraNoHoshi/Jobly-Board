import React, { Component } from 'react';

class Home extends Component {
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
    return <div className="Home">HOME</div>;
  }
}

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
