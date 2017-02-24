import { hashHistory } from 'react-router';

export const fetchAllRuns = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/runs'
  });
};

export const fetchSingleRun = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/runs/${id}`
  });
};

export const createRun = (run) => {
  return $.ajax({
    method: 'POST',
    url: 'api/runs/',
    data: { run },
    success: function (res) {
      hashHistory.push(`/runs/${res.id}`);
    }
  });
};

export const updateRun = (run) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/runs/${run.id}`,
    data: { run }
  });
};

export const deleteRun = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/runs/${id}`
  });
};
