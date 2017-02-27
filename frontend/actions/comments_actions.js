export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_NEW_COMMENT = 'RECEIVE_NEW_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
import * as APIUtil from '../util/comments_api_util';

export const receiveNewComment = (comment) => ({
  type: RECEIVE_NEW_COMMENT,
  comment
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});

export const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const createRunComment = (runId, runComment) => (dispatch) => {
	APIUtil.createRunComment(runId, runComment).then(runComment => {
		dispatch(receiveNewComment(runComment));
		return runComment;
  }).fail(error => dispatch(receiveCommentErrors(error.responseJSON)));
};

export const createRouteComment = (routeId, routeComment) => (dispatch) => {
	APIUtil.createRouteComment(routeId, routeComment).then(routeComment => {
		dispatch(receiveNewComment(routeComment));
		return routeComment;
  }).fail(error => dispatch(receiveCommentErrors(error.responseJSON)))
};

export const deleteComment = (commentId) => (dispatch) => (
	APIUtil.deleteComment(commentId).then(comment => {
		dispatch(removeComment(comment));
		return comment;
	}).fail(error => dispatch(receiveCommentErrors(error.responseJSON)))
);
// export const deleteRunComment = (commentId) => (dispatch) => (
// 	APIUtil.deleteComment(commentId).then(runComment => {
// 		dispatch(removeRunComment(runComment));
// 		return runComment;
// 	}).fail(error => dispatch(receiveCommentErrors(error.responseJSON)))
// );
//
// export const deleteRouteComment = (commentId) => (dispatch) => (
// 	APIUtil.deleteComment(commentId).then(routeComment => {
// 		dispatch(removeRouteComment(routeComment));
// 		return routeComment;
// 	}).fail(error => dispatch(receiveCommentErrors(error.responseJSON)))
// );
