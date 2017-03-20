import { merge, assign } from 'lodash';
import {  RECEIVE_ALL_ROUTES, RECEIVE_SINGLE_ROUTE, REMOVE_ROUTE,
          RECEIVE_NEW_ROUTE, RECEIVE_ROUTE_ERRORS } from '../actions/routes_actions';
import { RECEIVE_NEW_COMMENT, REMOVE_COMMENT } from '../actions/comments_actions';

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
      const oldRoute = state[action.comment.commentable_id];
      if (action.comment.commentable_type === 'Route' && oldRoute && oldRoute.comments) {
        const newCommentState = merge({}, state);
        const comment = action.comment;
        const route = newCommentState[action.comment.commentable_id];
        route.comments.push(action.comment);
        return newCommentState;
      } else {
      return state;
      }
    case REMOVE_COMMENT:
      const oldRouteToRemoveCommentsFrom = state[action.comment.commentable_id];
      if (action.comment.commentable_type === 'Route' && oldRouteToRemoveCommentsFrom && oldRouteToRemoveCommentsFrom.comments) {
        const newRemovedCommentState = merge({}, state);
        const commentToRemove = action.comment;
        const routeToRemoveCommentFrom = newRemovedCommentState[action.comment.commentable_id];
        const comments = routeToRemoveCommentFrom.comments
        for (let i = 0; i < comments.length; i++) {
          if (comments[i].id === action.comment.id) {
            comments.splice(i, 1);
            break;
          }
        }
        return newRemovedCommentState;
      }
    default:
      return state;
  }
}
