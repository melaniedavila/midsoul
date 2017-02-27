import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';
import { deleteComment, receiveCommentErrors } from '../../../actions/comments_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    clearErrors: () => dispatch(receiveCommentErrors({}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndexItem);
