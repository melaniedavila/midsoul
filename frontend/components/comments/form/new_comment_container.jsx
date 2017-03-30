import { connect } from 'react-redux';
import NewComment from './new_comment';
import { createRunComment, createRouteComment } from '../../../actions/comments_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRunComment: (runId, runComment) => dispatch(createRunComment(runId, runComment)),
    createRouteComment: (routeId, routeComment) => dispatch(createRouteComment(routeId, routeComment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComment);
