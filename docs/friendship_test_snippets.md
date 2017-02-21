//////////////////////////////////////////////////////////////////////////////

a = (friends) => console.log(receiveCurrentUserFriends(friends));
fetchCurrentUserFriends().then(a)

b = friendship => console.log(removeFriendship(friendship));
deleteFriendship(9).then(b);

////////////////////////////////////////////////////////////////////

store.getState();
a = friends => store.dispatch(receiveCurrentUserFriends(friends));
fetchCurrentUserFriends().then(a);
store.getState();

store.getState();
b1 = friendship => store.dispatch(removeFriendship(friendship));
deleteFriendship(8).then(b1);
store.getState();

//////////////////////////////

initialState = store.getState();
selectAllFriends(initialState);

store.dispatch(requestCurrentUserFriends());

populatedState = store.getState();
selectAllFriends(populatedState);
