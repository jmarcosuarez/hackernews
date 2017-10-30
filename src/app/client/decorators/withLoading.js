import React from 'react';
// import PropTypes from 'prop-types';

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

// withLoading.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
// };

export default withLoading;

// import React from 'react';
// import PropTypes from 'prop-types';

// import styles from './styles.css';

// const withLoading = Component =>
//   class MyComponent extends React.Component {
//     static propTypes = {
//       isLoading: PropTypes.string.isRequired,
//     }
//     render() {
//       return (
//         <div>
//           <Component {...this.props} />
//           {
//             this.props.isLoading &&
//               <div className={styles.pageLoader}>
//                 <div />
//               </div>
//           }
//         </div>
//       );
//     }
//   };

// export default withLoading;
