import { merge, assign } from 'lodash';
import {  RECEIVE_ALL_RUNS, RECEIVE_SINGLE_RUN, REMOVE_RUN,
          RECEIVE_NEW_RUN, RECEIVE_RUN_ERRORS } from '../actions/runs_actions';
import { RECEIVE_NEW_RUN_COMMENT, RECEIVE_NEW_COMMENT, REMOVE_RUN_COMMENT } from '../actions/comments_actions';

export default function runsReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_RUNS:
      return merge({}, action.runs);
    case RECEIVE_SINGLE_RUN:
    case RECEIVE_NEW_RUN:
      return merge({}, state, { [action.run.id]: action.run });
    case REMOVE_RUN:
      let newState = merge({}, state);
      delete newState[action.run.id];
      return newState;
    case RECEIVE_NEW_COMMENT:
    if (action.comment.commentable_type === 'Run' && state[action.comment.commentable_id]) {
      const newCommentState = merge({}, state);
      const comment = action.comment;
      const run = newCommentState[action.comment.commentable_id];
      run.comments.push(action.comment);
      return newCommentState;
    } else {
      return state;
    }
      //
      //
      //
      // const feedItem = values(newCommentState).find((feedItem) => {
      //   return ((feedItem.feedable.id === action.comment.commentable_id) &&
      //   (feedItem.feedable_type === action.comment.commentable_type));
      // });
      // if (feedItem) {
      //   feedItem.feedable.comments.push(action.comment);
      //   return newCommentState;
      // } else {
      //   return state;
      // }
    // case RECEIVE_NEW_RUN_COMMENT:
    // // goal: look at commentable_id to find run from the state. concat new comment
    // // into comments arr
    //   debugger
    //   const comment = action.runComment;
    //   const commentable_id = action.runComment.commentable_id;
    //   const run = state.runs.commentable_id;
    //   const comments = Object.assign({}, run.comments.concat(comments));
    //   return Object.assign({}, state, { comments: comments} );
    // case REMOVE_RUN_COMMENT:
    //   let runComments = merge({}, state.run.comments);
    //   const commentToRemove = action.comment;
    //   const runCommentableId = action.comment.commentable_id;
    //   const newComments = comments.filter((comment) => comment.id !== commentToRemove.id);
    //   return Object.assign({}, state, {comments: newComment });
    default:
      return state;
  }
}
