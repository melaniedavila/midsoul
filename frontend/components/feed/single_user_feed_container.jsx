import React from 'react';
import { connect } from 'react-redux';
import SingleUserFeedIndex from './single_user_feed_index';
import { requestSingleUserFeedItems } from '../../actions/feeds_actions';
import { selectAllFeedItems } from '../../reducers/selectors';


const mapStateToProps = function (state, ownProps) {
  debugger
  return {
    loading: state.loading.indexLoading,
    feedItems: selectAllFeedItems(state),
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    requestSingleUserFeedItems: (id) => dispatch(requestSingleUserFeedItems(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleUserFeedIndex);
