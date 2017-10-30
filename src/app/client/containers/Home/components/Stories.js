import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import Story from './Story';
import {
  withLoading,
  withPaginated,
  withInfiniteScroll,
} from '../../../decorators';

import styles from './Styles.css';
/* eslint-disable react/prefer-stateless-function */
class Stories extends Component {
  render() {
    const { stories } = this.props;
    return (
      <div className={styles.stories}>
        <h1>Stories:</h1>
        {(stories || []).map(story =>
          <Story
            key={story.objectID}
            story={story}
          />,
        )}
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
};

const loadingCondition = props =>
  props.isLoading;

const paginatedCondition = props => 
  props.page !== null && !props.isLoading && props.error;

const infiniteScrollCondition = props =>
  props.stories.length
  && !props.isLoading
  && !props.error;

// now compose!
const decorate = compose(
  withLoading(loadingCondition),
  withPaginated(paginatedCondition),
  withInfiniteScroll(infiniteScrollCondition),
);

export default decorate(Stories);
