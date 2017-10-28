import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from '../../components';
import * as actions from '../../redux/actions';

import styles from './Home.css';

class HomePage extends Component {
  componentDidMount() {
    this.props.onSendGetStoriesRequest();
  }

  renderRow = stories =>
    <li key={stories.objectID}>
      {stories.title}
      {stories.url}
    </li>;

  renderLoader() {
    if (this.props.isFetching) {
      return (
        <div className={styles.pageLoader}>
          <div />
        </div>
      );
    }
    return null;
  }

  renderError() {
    if (this.props.error) {
      return (
        <div className={styles.pageError}>
          Something went wrong.
        </div>
      );
    }
    return null;
  }

  renderContent() {
    const { hits } = this.props;
    if (hits && hits.length) {
      return (
        <div className={styles.pageContent}>
          {this.renderStories()}
        </div>
      );
    }
    return null;
  }

  renderStories() {
    const { hits } = this.props;
    return (
      <div className={styles.friends}>
        <h1>Stories:</h1>
        <ul>
          {hits.map(this.renderRow)}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <Layout title="Welcome!">
        <div className={styles.wrapper}>
          <div className={styles.main}>

            <h1>This is the main home Page</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupifriendst non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <ul>
              {this.renderLoader()}
              {this.renderError()}
              {this.renderContent()}
            </ul>

          </div>
        </div>
      </Layout>
    );
  }
}

HomePage.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.string,
  onSendGetStoriesRequest: PropTypes.func.isRequired,
  hits: PropTypes.arrayOf(PropTypes.shape({
    objectID: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
  })),

};

HomePage.defaultProps = {
  isFetching: false,
  error: '',
  hits: [],
};


function mapStateToProps(state) {
  const { isFetching, error, hits } = state.stories;
  return {
    isFetching,
    error,
    hits,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSendGetStoriesRequest: bindActionCreators(actions.sendGetStoriesRequest, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
