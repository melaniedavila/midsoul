import { hashHistory } from 'react-router';

export const fetchSingleRunComments = (runId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/runs/${runId}/comments`
  });
};

export const fetchSingleRouteComments = (routeId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/routes/${routeId}/comments`
  });
};

export const createRunComment = (runId, runComment) => {
  return $.ajax({
    method: 'POST',
    url: `/api/runs/${runId}/comments`,
    data: { runComment }
  });
};

export const createRouteComment = (routeId, routeComment) => {
  return $.ajax({
    method: 'POST',
    url: `/api/routes/${routeId}/comments`,
    data: { routeComment }
  });
};

export const deleteRunComment = (runId, commentId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/runs/${runId}/comments/${commentId}`
  });
};

export const deleteRouteComment = (routeId, commentId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/routes/${routeId}/comments/${commentId}`
  });
};
