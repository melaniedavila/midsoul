import { merge, assign } from 'lodash';
import {  RECEIVE_MULTI_USER_FEED_ITEMS, RECEIVE_SINGLE_USER_FEED_ITEMS } from '../actions/feeds_actions';

export default function feedsReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MULTI_USER_FEED_ITEMS:
    case RECEIVE_SINGLE_USER_FEED_ITEMS:
      return merge({}, action.feedItems);
    default:
      return state;
  }
}
