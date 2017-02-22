//////////////////////////////////////////////////////////////////////////////

a = (items) => console.log(receiveMultiUserFeedItems(items));
fetchMultiUserFeedItems().then(a)


b = run => console.log(receiveSingleUserFeedItems(items));
fetchMultiUserFeedItems(3).then(b);


////////////////////////////////////////////////////////////////////

store.getState();
a = items => store.dispatch(receiveMultiUserFeedItems(items));
fetchMultiUserFeedItems().then(a);
store.getState();



store.getState();
b = run => store.dispatch(receiveSingleRun(run));
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

store.dispatch(requestSingleUserFeedItems());

populatedState = store.getState();
selectAllFeedItems(populatedState);
