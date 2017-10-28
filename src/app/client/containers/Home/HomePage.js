import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from '../../components';
import * as actions from '../../redux/actions';

import Stories from './components/Stories';
import SearchStories from './components/SearchStories';
import styles from './Home.css';

class HomePage extends Component {
  componentDidMount() {
    this.props.onSendGetStoriesRequest();
  }

  renderRow = item =>
    <li key={item.objectID}>
      <a href={item.url}>{item.title}</a>
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
            {<SearchStories onFetchStories={this.props.onSendGetStoriesRequest} />}
            {<Stories />}
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
    title: PropTypes.string,
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
