//////////////////////////////////////////////////////////////////////////////

a = (items) => console.log(receiveMultiUserFeedItems(items));
fetchMultiUserFeedItems().then(a)


b = items => console.log(receiveSingleUserFeedItems(items));
fetchSingleUserFeedItems(3).then(b);


////////////////////////////////////////////////////////////////////

store.getState();
a = items => store.dispatch(receiveMultiUserFeedItems(items));
fetchMultiUserFeedItems().then(a);
store.getState();



store.getState();
b = items => store.dispatch(receiveSingleUserFeedItems(items));
fetchSingleUserFeedItems(1).then(b);
store.getState();


//////////////////////////////

initialState = store.getState();
selectAllFeedItems(initialState);

store.dispatch(requestMultiUserFeedItems());

populatedState = store.getState();
selectAllFeedItems(populatedState);


///////////////

initialState = store.getState();
selectAllFeedItems(initialState);

store.dispatch(requestSingleUserFeedItems(1));

populatedState = store.getState();
selectAllFeedItems(populatedState);
