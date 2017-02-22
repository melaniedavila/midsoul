import React from 'react';
import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { requestMultiUserFeedItems } from '../../actions/feeds_actions';


const mapStateToProps = function (state, ownProps) {
  return {
    userId: ownProps.params.userId
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    receiveSingleUserFeedItems: () => dispatch(receiveSingleUserFeedItems())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
