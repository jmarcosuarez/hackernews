import React from 'react';
import PropTypes from 'prop-types';

import Story from './Story';
import styles from '../Home.css';

const Stories = ({ stories }) => (
  <div className={styles.pageContent}>
    <h1>Stories:</h1>
    {(stories || []).map(story =>
      <Story
        key={story.objectID}
        story={story}
      />,
    )}
  </div>
);

Stories.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    objectID: PropTypes.string.isRequired,
    title: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

export default Stories;
