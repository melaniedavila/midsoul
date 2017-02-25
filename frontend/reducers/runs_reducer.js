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
    default:
      return state;
  }
}
