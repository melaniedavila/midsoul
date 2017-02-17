export const fetchAllRoutes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/routes'
  });
};

export const fetchSingleRoute = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/routes/${id}`
  });
};

export const createRoute = (route) => {
  // route.comments = Object.keys(route.comments).map(idx => route.comments[idx]);
  //TODO: uncomment above when comments impemented
  return $.ajax({
    method: 'POST',
    url: 'api/routes/',
    data: { route }
  });
};

export const updateRoute = (route) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/routes/${route.id}`,
    data: { route }
  });
};

export const deleteRoute = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/routes/${id}`
  });
};
