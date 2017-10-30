import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */
const withPaginated = conditionFn => Component =>
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
              conditionFn(this.props) &&
              <div>
                <div>
                  Something went wrong...
                </div>
                <button
                  type="button"
                  onClick={this.onClick}
                >
                  More
                </button>
              </div>
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
  error: PropTypes.string,
  onPaginatedSearch: PropTypes.func.isRequired,
};

export default withPaginated;
