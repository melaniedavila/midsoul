import { merge, assign } from 'lodash';
import {  RECEIVE_ALL_ROUTES, RECEIVE_SINGLE_ROUTE, REMOVE_ROUTE,
          RECEIVE_NEW_ROUTE, RECEIVE_ROUTE_ERRORS } from '../actions/routes_actions';
import { RECEIVE_NEW_COMMENT } from '../actions/comments_actions';

export default function routesReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ROUTES:
      return merge({}, action.routes);
    case RECEIVE_SINGLE_ROUTE:
    case RECEIVE_NEW_ROUTE:
      return merge({}, state, { [action.route.id]: action.route });
    case REMOVE_ROUTE:
      let newState = merge({}, state);
      delete newState[action.route.id];
      return newState;
    case RECEIVE_NEW_COMMENT:
      if (action.comment.commentable_type === 'Route' && state[action.comment.commentable_id]) {
        const newCommentState = merge({}, state);
        const comment = action.comment;
        const route = newCommentState[action.comment.commentable_id];
        route.comments.push(action.comment);
        return newCommentState;
      } else {
        return state;
      }
    // case REMOVE_ROUTE_COMMENT:
    default:
      return state;
  }
}
