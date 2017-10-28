import React, { Component } from 'react';
import PropTypes from 'prop-types';

const applyQueryState = query => () => ({
  query,
});

class SearchStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState(applyQueryState(value));
  }

  handleSubmit = (e) => {
    const { query } = this.state;
    if (query) {
      this.props.onFetchStories(query);
      this.setState(applyQueryState(''));
    }
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.onChange}
        />
        <button type="submit">
          Search
        </button>
      </form>
    );
  }
}

SearchStories.propTypes = {
  onFetchStories: PropTypes.func.isRequired,
};

export default SearchStories;
