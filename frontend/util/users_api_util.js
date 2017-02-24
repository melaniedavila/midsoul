import { hashHistory } from 'react-router';

export const fetchAllUsers = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data
  });
};

export const fetchSingleUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};

export const createUser = (user) => {
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
  var formData = new FormData();

  for ( let key in user ) {
    formData.append(`user[${key}]`, user[key]);
  }

  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
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
