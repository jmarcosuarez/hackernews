import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const withLoading = Component => props =>
  <div>
    <Component {...props} />
    {
      props.isFetching &&
        <div className={styles.pageLoader}>
          <div />
        </div>
    }
  </div>;

withLoading.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};

export default withLoading;
