import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Story from './Story';
import styles from '../Home.css';

class Stories extends Component {
  onClick = () => {
    this.props.onPaginatedSearch(this.props.query, this.props.page + 1);
  }

  render() {
    const { stories } = this.props;
    return (
      <div className={styles.pageContent}>
        <h1>Stories:</h1>
        {(stories || []).map(story =>
          <Story
            key={story.objectID}
            story={story}
          />,
        )}
        <div className="interactions">
          {
            <button
              type="button"
              onClick={this.onClick}
            >
              More
            </button>
          }
        </div>
      </div>
    );
  }
}

Stories.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    objectID: PropTypes.string.isRequired,
    title: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onPaginatedSearch: PropTypes.func.isRequired,
};

export default Stories;
