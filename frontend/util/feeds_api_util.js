export const fetchMultiUserFeedItems = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/feed_items'
  });
};

export const fetchSingleUserFeedItems = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}/feed_items`
  });
};
