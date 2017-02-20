import { hashHistory } from 'react-router';

export const fetchAllUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};

export const fetchSingleUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};

export const createUser = (user) => {
  // TODO: uncomment below when comments impemented
  // user.comments = Object.keys(user.comments).map(idx => user.comments[idx]);
  return $.ajax({
    method: 'POST',
    url: 'api/users/',
    data: { user },
    success: function (res) {
      hashHistory.push(`/users/${res.id}`);
    }
  });
};

export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user },
    success: function (res) {
      hashHistory.push(`/users/${res.id}`);
    }
  });
};

export const deleteUser = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/users/${id}`
  });
};
