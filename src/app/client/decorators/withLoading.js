import React from 'react';

import styles from './styles.css';

const withLoading = conditionFn => Component => props =>
  <div>
    <Component {...props} />
    {
      conditionFn(props) &&
        <div className={styles.pageLoader}>
          <div />
        </div>
    }
  </div>;

export default withLoading;
