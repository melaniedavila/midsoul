export const fetchCurrentUserReceivedFriendRequests = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/friend_requests'
  });
};

export const createFriendRequest = (friend_request) => {
  return $.ajax({
    method: 'POST',
    url: 'api/friend_requests/',
    data: { friend_request }
  });
};

export const updateFriendRequest = (friend_request) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/friend_requests/${friend_request.id}`,
    data: { friend_request }
  });
};
