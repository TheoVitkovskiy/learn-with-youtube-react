/**
 * External dependencies
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Internal dependencies
 */
import { isRequestingCoursesForQuery } from 'state/courses/selectors';
import { requestCourses } from 'state/courses/actions';

class QueryCourses extends Component {
  componentWillMount() {
    this.request(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.query === nextProps.query) {
      return;
    }

    this.request(nextProps);
  }

  request(props) {
    if (props.query === null) {
      props.requestCourses('JavaScript');
      return;
    }

    if (!props.requestingCourses) {
      props.requestCourses(props.query);
    }
  }

  render() {
    return null;
  }
}

QueryCourses.propTypes = {
  query: PropTypes.string.isRequired
};

export default connect(
  (state, ownProps) => {
    const { query } = ownProps;
    return {
      requestingCourses: isRequestingCoursesForQuery(state, query)
    };
  },
  dispatch => {
    return bindActionCreators(
      {
        requestCourses
      },
      dispatch
    );
  }
)(QueryCourses);
