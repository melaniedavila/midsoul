//////////////////////////////////////////////////////////////////////////////

a = (friendRequests) => console.log(receiveCurrentUserReceivedFriendRequests(friendRequests));
fetchCurrentUserReceivedFriendRequests().then(a)


friend_request = {
  requestor_id: 2,
  requestee_id: 6
}
b = friendRequest => console.log(receiveSingleFriendRequest(friendRequest));
createFriendRequest(friend_request).then(b);


testFriendRequestUpdate = {
  id: 10,
  status: 'accepted'
}
c = friendRequest => console.log(receiveSingleFriendRequest(friendRequest));
updateFriendRequest(testFriendRequestUpdate).then(c);


////////////////////////////////////////////////////////////////////

store.getState();
a = friendRequests => store.dispatch(receiveCurrentUserReceivedFriendRequests(friendRequests));
fetchCurrentUserReceivedFriendRequests().then(a);
store.getState();


testFriendRequest = {
  requestor_id: 1,
  requestee_id: 6
}
testFriendRequest = {
  requestor_id: 1,
  requestee_id: 5
}
store.getState();
b = friendRequest => store.dispatch(receiveSingleFriendRequest(friendRequest));
createFriendRequest(testFriendRequest).then(b);
store.getState();


testFriendRequestUpdate = {
  id: 7,
  status: 'rejected'
}
store.getState();
c1 = friendRequest => store.dispatch(receiveSingleFriendRequest(friendRequest));
updateFriendRequest(testFriendRequestUpdate).then(c1);
store.getState();

//////////////////////////////

initialState = store.getState();
selectAllFriendRequests(initialState);

store.dispatch(requestCurrentUserReceivedFriendRequests());

populatedState = store.getState();
selectAllFriendRequests(populatedState);
