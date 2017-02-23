export const RECEIVE_MULTI_USER_FEED_ITEMS = 'RECEIVE_MULTI_USER_FEED_ITEMS';
export const RECEIVE_SINGLE_USER_FEED_ITEMS = 'RECEIVE_SINGLE_USER_FEED_ITEMS';
export const LOAD_MULTI_USER_FEED_ITEMS = 'LOAD_MULTI_USER_FEED_ITEMS ';
export const LOAD_SINGLE_USER_FEED_ITEMS= 'LOAD_SINGLE_USER_FEED_ITEMS';
export const RECEIVE_FEED_ERRORS = 'RECEIVE_FEED_ERRORS';

import * as APIUtil from '../util/feeds_api_util';

export const loadMultiUserFeedItems = () => ({
  type: LOAD_MULTI_USER_FEED_ITEMS
});

export const loadSingleUserFeedItems = () => ({
  type: LOAD_SINGLE_USER_FEED_ITEMS
});

export const receiveMultiUserFeedItems = function (feedItems) {
  return({
    type: RECEIVE_MULTI_USER_FEED_ITEMS,
    feedItems
  });
};

export const receiveSingleUserFeedItems = (feedItems) => ({
  type: RECEIVE_SINGLE_USER_FEED_ITEMS,
  feedItems
});

export const receiveFeedErrors = (errors) => ({
  type: RECEIVE_FEED_ERRORS,
  errors
});


export const requestMultiUserFeedItems = () => (dispatch) => {
	dispatch(loadMultiUserFeedItems());
	return APIUtil.fetchMultiUserFeedItems()
		.then(feedItems => dispatch(receiveMultiUserFeedItems(feedItems)));
};


export const requestSingleUserFeedItems = (id) => (dispatch) => {
	dispatch(loadSingleUserFeedItems());
	return APIUtil.fetchSingleUserFeedItems(id)
		.then(feedItems => dispatch(receiveSingleUserFeedItems(feedItems)));
};

// export const requestSingleUserFeedItems = (id) => (dispatch) => {
// 	dispatch(loadSingleUserFeedItems());
// 	return APIUtil.fetchSingleUserFeedItems(id).then(feedItems => {
// 		dispatch(receiveSingleUserFeedItems(feedItems));
// 		return feedItems;
// 	}).fail(error => dispatch(receiveMultiUserFeedItems(error.responseJSON)));
// };
