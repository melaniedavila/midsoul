import React from 'react';
import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { requestMultiUserFeedItems } from '../../actions/feeds_actions';


const mapDispatchToProps = function (dispatch) {
  return {
    requestMultiUserFeedItems: () => dispatch(requestMultiUserFeedItems())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FeedIndex);
