import React from 'react';
import PropTypes from 'prop-types';

import '../Home.css';

const Story = ({ story }) => {
  const {
    title,
    url,
    author,
    points,
  } = story;

  return (
    <div className="story">
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>
        {author}
      </span>
      <span>
        {points}
      </span>
    </div>
  );
};

Story.propTypes = {
  story: PropTypes.string.isRequired,
};

export default Story;
