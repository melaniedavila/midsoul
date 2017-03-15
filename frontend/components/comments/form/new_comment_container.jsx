import { connect } from 'react-redux';
import NewComment from './new_comment';
import { createRunComment, createRouteComment,
        deleteRunComment, deleteRouteComment,
        receiveCommentErrors } from '../../../actions/comments_actions';
import { requestMultiUserFeedItems, requestSingleUserFeedItems } from '../../../actions/feeds_actions';
import { selectAllRoutes, selectAllRuns, selectAllFeedItems } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    currentUser: state.session.currentUser,
    feedItems: selectAllFeedItems(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRunComment: (runId, runComment) => dispatch(createRunComment(runId, runComment)),
    createRouteComment: (routeId, routeComment) => dispatch(createRouteComment(routeId, routeComment)),
    deleteRunComment: (commentId) => dispatch(deleteRunComment(commentId)),
    deleteRouteComment: (commentId) => dispatch(deleteRouteComment(commentId)),
    clearErrors: () => dispatch(receiveCommentErrors({})),
    requestMultiUserFeedItems: () => dispatch(requestMultiUserFeedItems()),
    requestSingleUserFeedItems: (id) => dispatch(requestSingleUserFeedItems(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComment);
