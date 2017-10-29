import React from 'react';
import PropTypes from 'prop-types';

import styles from './Styles.css';

const Story = ({ story }) => {
  const {
    title,
    url,
    author,
    points,
  } = story;

  return (
    <ul className={styles.story}>
      <li>
        <a href={url}>{title}</a>
      </li>
      <li>
        {author}
      </li>
      <li>
        {points}
      </li>
    </ul>
  );
};

Story.propTypes = {
  story: PropTypes.objectOf(PropTypes.shape({
    objectID: PropTypes.string.isRequired,
    title: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

export default Story;
