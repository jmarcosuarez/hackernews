import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { compose } from 'recompose';
import { Layout } from '../../components';
import * as actions from '../../redux/actions';

import Stories from './components/Stories';
import SearchStories from './components/SearchStories';
// import withLoading from '../../decorators/withLoading';

import styles from './Home.css';

class HomePage extends Component {
  componentDidMount() {
    this.props.onSendGetStoriesRequest();
  }
  
  render() {
    return (
      <Layout title="Welcome!">
        <div className={styles.wrapper}>
          <div className={styles.main}>
            {
              <div>
                <SearchStories onFetchStories={this.props.onSendGetStoriesRequest} />
                <Stories
                  stories={this.props.hits}
                  query={this.props.query}
                  page={this.props.page}
                  error={this.props.error}
                  isLoading={this.props.isFetching}
                  onPaginatedSearch={this.props.onSendGetStoriesRequest}
                />
              </div>
            }
          </div>
        </div>
      </Layout>
    );
  }
}

HomePage.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.string,
  query: PropTypes.string,
  page: PropTypes.number,
  onSendGetStoriesRequest: PropTypes.func.isRequired,
  hits: PropTypes.arrayOf(PropTypes.shape({
    objectID: PropTypes.string.isRequired,
    title: PropTypes.string,
    url: PropTypes.string,
  })),

};

HomePage.defaultProps = {
  isFetching: false,
  error: '',
  page: 0,
  query: '',
  hits: [],
};


function mapStateToProps(state) {
  const { isFetching, error, hits, query, page } = state.stories;
  return {
    isFetching,
    error,
    hits,
    query,
    page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSendGetStoriesRequest: bindActionCreators(actions.sendGetStoriesRequest, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

// const withProductData = connect(mapStateToProps, mapDispatchToProps);

// // now compose!
// const decorate = compose(
//   withProductData,
//   withLoading,
// );

// export default decorate(HomePage);
