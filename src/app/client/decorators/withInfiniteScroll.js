/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';

const withInfiniteScroll = Component =>
  class WithInfiniteScroll extends React.Component {
    static propTypes = {
      stories: PropTypes.arrayOf(PropTypes.shape({
        objectID: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string,
      })).isRequired,
      onPaginatedSearch: PropTypes.func.isRequired,
      isLoading: PropTypes.bool.isRequired,
      page: PropTypes.number.isRequired,
      query: PropTypes.string.isRequired,
      error: PropTypes.string,
    }

    static defaultProps = {
      error: '',
    }

    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = (event) => {
      const { stories, onPaginatedSearch, isLoading, query, page, error } = this.props;
      const element = event.target.scrollingElement;
      if (
        (element.scrollHeight - element.scrollTop === element.clientHeight) &&
        stories.length &&
        !isLoading &&
        !error
      ) {
        onPaginatedSearch(query, page + 1);
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  };

export default withInfiniteScroll;
  
