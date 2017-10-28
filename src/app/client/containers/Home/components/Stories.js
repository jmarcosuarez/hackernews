import React from 'react';
import styles from '../Home.css';
import Story from './Story';

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

export default Stories;
