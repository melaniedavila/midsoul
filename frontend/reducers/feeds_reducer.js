import { merge, assign, values } from 'lodash';
import {  RECEIVE_MULTI_USER_FEED_ITEMS, RECEIVE_SINGLE_USER_FEED_ITEMS } from '../actions/feeds_actions';
import { RECEIVE_NEW_COMMENT, REMOVE_RUN_COMMENT } from '../actions/comments_actions';


export default function feedsReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MULTI_USER_FEED_ITEMS:
    case RECEIVE_SINGLE_USER_FEED_ITEMS:
      return merge({}, action.feedItems);
    case RECEIVE_NEW_COMMENT:
    debugger
      let newState = merge({}, state);
      const feedItem = values(newState).find((feedItem) => {
        return ((feedItem.feedable.id === action.comment.commentable_id) &&
        (feedItem.feedable_type === action.comment.commentable_type));
      });
      if (feedItem) {
        feedItem.feedable.comments.push(action.comment);
        return newState;
      } else {
        return state;
      }
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

// case RECEIVE_NEW_RUN_COMMENT:
  // goal: look at commentable_id to find run from the state. concat new comment
  // into comments arr
    // debugger
    // const comment = action.runComment;
    // const commentable_id = action.runComment.commentable_id;
    // const run = state.runs.commentable_id;
    // const comments = Object.assign({}, run.comments.concat(comments));
    // return Object.assign({}, state, { comments: comments} );
