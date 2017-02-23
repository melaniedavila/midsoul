// export const RECEIVE_SINGLE_RUN_COMMENTS = 'RECEIVE_SINGLE_RUN_COMMENTS';
// export const RECEIVE_SINGLE_ROUTE_COMMENTS = 'RECEIVE_SINGLE_ROUTE_COMMENTS';
// export const LOAD_SINGLE_ROUTE_COMMENTS = 'LOAD_SINGLE_ROUTE_COMMENTS ';
// export const LOAD_SINGLE_RUN_COMMENTS = 'LOAD_SINGLE_RUN_COMMENTS ';
// export const RECEIVE_NEW_COMMENT = 'RECEIVE_NEW_COMMENT';
// export const REMOVE_COMMENT = 'REMOVE_COMMENT';
// export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const RECEIVE_NEW_RUN_COMMENT    = 'RECEIVE_NEW_RUN_COMMENT';
export const RECEIVE_NEW_ROUTE_COMMENT    = 'RECEIVE_NEW_ROUTE_COMMENT';
export const REMOVE_ROUTE_COMMENT = 'REMOVE_ROUTE_COMMENT';
export const REMOVE_RUN_COMMENT = 'REMOVE_RUN_COMMENT';
import * as APIUtil from '../util/comments_api_util';


export const receiveNewRunComment = (runComment) => ({
  type: RECEIVE_NEW_RUN_COMMENT,
  runComment
});

export const receiveNewRouteComment = (routeComment) => ({
  type: RECEIVE_NEW_ROUTE_COMMENT,
  routeComment
});

export const removeRunComment = (runComment) => ({
  type: REMOVE_RUN_COMMENT,
  runComment
});

export const removeRouteComment = (routeComment) => ({
  type: REMOVE_ROUTE_COMMENT,
  routeComment
});

export const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const createRunComment = (runId, runComment) => (dispatch) => (
	APIUtil.createRunComment(runId, runComment).then(runComment => {
		dispatch(receiveNewRunComment(runComment));
		return runComment;
  }).fail(error => dispatch(receiveCommentErrors(error.responseJSON)))
);

export const createRouteComment = (routeId, routeComment) => (dispatch) => (
	APIUtil.createRouteComment(routeId, routeComment).then(routeComment => {
		dispatch(receiveNewRouteComment(routeComment));
		return routeComment;
  }).fail(error => dispatch(receiveCommentErrors(error.responseJSON)))
);

export const deleteRunComment = (runId, commentId) => (dispatch) => (
	APIUtil.deleteRunComment(runId, commentId).then(runComment => {
		dispatch(removeRunComment(runComment));
		return runComment;
	}).fail(error => dispatch(receiveCommentErrors(error.responseJSON)))
);

export const deleteRouteComment = (routeId, commentId) => (dispatch) => (
	APIUtil.deleteRouteComment(routeId, commentId).then(routeComment => {
		dispatch(removeRouteComment(routeComment));
		return routeComment;
	}).fail(error => dispatch(receiveCommentErrors(error.responseJSON)))
);
//
// export const requestSingleRunComments = (runId) => (dispatch) => {
// 	dispatch(loadSingleRunComments());
// 	return APIUtil.fetchSingleRunComments(runId).then(runComments => {
// 		dispatch(receiveSingleRunComments(runComments));
// 		return runComments;
// 	}).fail(error => dispatch(receiveCommentErrors(error.responseJSON)));
// };
//
// export const requestSingleRouteComments = (routeId) => (dispatch) => {
// 	dispatch(loadSingleRouteComments());
// 	return APIUtil.fetchSingleRouteComments(routeId).then(routeComments => {
// 		dispatch(receiveSingleRouteComments(routeComments));
// 		return routeComments;
// 	}).fail(error => dispatch(receiveCommentErrors(error.responseJSON)));
// };



// export const createComment = (type, id, comment) => (dispatch) => (
// 	APIUtil.createComment(type, id, comment).then(comment => {
// 		dispatch(receiveNewComment(comment));
// 		return comment;
//   }).fail(error => dispatch(receiveCommentErrors(error.responseJSON)))
// );
//
// export const deleteComment = (type, activityId, commentId) => (dispatch) => (
// 	APIUtil.deleteComment(type, activityId, commentId).then(comment => {
// 		dispatch(removeComment(comment));
// 		return comment;
// 	}).fail(error => dispatch(receiveCommentErrors(error.responseJSON)))
// );



// export const loadSingleRunComments = () => ({
//   type: LOAD_SINGLE_RUN_COMMENTS
// });
//
// export const loadSingleRouteComments = () => ({
//   type: LOAD_SINGLE_ROUTE_COMMENTS
// });

// export const receiveSingleRunComments = (runComments) => ({
//   type: RECEIVE_SINGLE_RUN_COMMENTS,
//   runComments
// });
//
// export const receiveSingleRouteComments = (routeComments) => ({
//   type: RECEIVE_SINGLE_ROUTE_COMMENTS,
//   routeComments
// });



// export const receiveNewComment = (comment) => ({
//   type: RECEIVE_NEW_COMMENT,
//   comment
// });
//
// export const removeComment = (comment) => ({
//   type: REMOVE_COMMENT,
//   comment
// });

// export const receiveNewComment = (comment) => ({
//   type: RECEIVE_NEW_COMMENT,
//   comment
// });
//
// export const removeComment = (comment) => ({
//   type: REMOVE_COMMENT,
//   comment
// });
