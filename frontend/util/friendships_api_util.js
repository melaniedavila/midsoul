import { hashHistory } from 'react-router';

export const fetchCurrentUserFriends = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/friends'
  });
};

export const deleteFriendship = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/friendships/${id}`
  });
};
