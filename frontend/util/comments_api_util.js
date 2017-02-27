export const createRunComment = (runId, runComment) => {
  return $.ajax({
    method: 'POST',
    url: `/api/runs/${runId}/comments`,
    data: { comment: runComment }
  });
};

export const createRouteComment = (routeId, routeComment) => {
  return $.ajax({
    method: 'POST',
    url: `/api/routes/${routeId}/comments`,
    data: { comment: routeComment }
  });
};

export const deleteComment = (commentId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  });
};
