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
  default:
    return state;
  }
}
