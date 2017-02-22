import React from 'react';
import { connect } from 'react-redux';
import MultiUserFeedIndex from './multi_user_feed_index';
import { requestMultiUserFeedItems } from '../../actions/feeds_actions';
import { selectAllFeedItems } from '../../reducers/selectors';

const mapStateToProps = function (state, ownProps) {
  return {
    loading: state.loading.indexLoading,
    feedItems: selectAllFeedItems(state),
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    requestMultiUserFeedItems: () => dispatch(requestMultiUserFeedItems())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiUserFeedIndex);
