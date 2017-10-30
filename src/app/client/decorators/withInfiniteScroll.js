/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';

const withInfiniteScroll = conditionFn => Component =>
  class WithInfiniteScroll extends React.Component {
    static propTypes = {
      onPaginatedSearch: PropTypes.func.isRequired,
      page: PropTypes.number.isRequired,
      query: PropTypes.string.isRequired,
    }

    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = (event) => {
      const element = event.target.scrollingElement;
      if (
        (element.scrollHeight - element.scrollTop === element.clientHeight)
        && conditionFn(this.props)
        ) {
        this.props.onPaginatedSearch(this.props.query, this.props.page + 1);
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  };

export default withInfiniteScroll;
  
