import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
/* eslint-disable react/prop-types */
const withLoading = Component => props =>
  <div>
    <Component {...props} />
    {
      props.isLoading &&
        <div className={styles.pageLoader}>
          <div />
        </div>
    }
  </div>;

withLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default withLoading;
