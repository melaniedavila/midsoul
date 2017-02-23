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


// export const deleteRunComment = (runId, commentId) => {
//   return $.ajax({
//     method: 'DELETE',
//     url: `/api/runs/${runId}/comments/${commentId}`
//   });
// };
//
// export const deleteRouteComment = (routeId, commentId) => {
//   return $.ajax({
//     method: 'DELETE',
//     url: `/api/routes/${routeId}/comments/${commentId}`
//   });
// };


// export const createComment = (type, id, comment) => {
//   // where type is runs or routes
//   return $.ajax({
//     method: 'POST',
//     url: `/api/${type}/${id}/comments`,
//     data: { comment }
//   });
// };
//
// export const deleteComment = (type, activityId, commentId) => {
//   return $.ajax({
//     method: 'DELETE',
//     url: `/api/${type}/${activityId}/comments/${commentId}`
//   });
// };



// export const fetchSingleRunComments = (runId) => {
//   return $.ajax({
//     method: 'GET',
//     url: `/api/runs/${runId}/comments`
//   });
// };
//
// export const fetchSingleRouteComments = (routeId) => {
//   return $.ajax({
//     method: 'GET',
//     url: `/api/routes/${routeId}/comments`
//   });
// };
