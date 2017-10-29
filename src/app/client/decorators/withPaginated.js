import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */
const withPaginated = Component =>
  class decorate extends Component {
    onClick = () => {
      this.props.onPaginatedSearch(this.props.query, this.props.page + 1);
    }
    render() {
      return (
        <div>
          <Component {...this.props} />

          <div className="interactions">
            {
              (this.props.page !== null && !this.props.isLoading) &&
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
  };
  
withPaginated.propTypes = {
  isLoading: PropTypes.bool,
  page: PropTypes.number,
  query: PropTypes.string,
  onPaginatedSearch: PropTypes.func.isRequired,
};

export default withPaginated;
