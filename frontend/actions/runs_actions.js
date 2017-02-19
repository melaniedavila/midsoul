export const RECEIVE_ALL_RUNS    = 'RECEIVE_ALL_RUNS';
export const RECEIVE_SINGLE_RUN = 'RECEIVE_SINGLE_RUN';
export const RECEIVE_NEW_RUN    = 'RECEIVE_NEW_RUN';
export const REMOVE_RUN = 'REMOVE_RUN';
export const LOAD_ALL_RUNS = 'LOAD_ALL_RUNS ';
export const LOAD_SINGLE_RUN = 'LOAD_SINGLE_RUN';
export const RECEIVE_RUN_ERRORS = 'RECEIVE_RUN_ERRORS';

import * as APIUtil from '../util/runs_api_util';

export const loadAllRuns = () => ({
  type: LOAD_ALL_RUNS
});

export const loadSingleRun = () => ({
  type: LOAD_SINGLE_RUN
});

export const receiveAllRuns = function (runs) {
  return({
    type: RECEIVE_ALL_RUNS,
    runs
  });
};

export const receiveSingleRun = (run) => ({
  type: RECEIVE_SINGLE_RUN,
  run
});

export const receiveNewRun = (run) => ({
  type: RECEIVE_NEW_RUN,
  run
});

export const removeRun = (run) => ({
  type: REMOVE_RUN,
  run
});

export const receiveRunErrors = (errors) => ({
  type: RECEIVE_RUN_ERRORS,
  errors
});


export const requestAllRuns = () => (dispatch) => {
	dispatch(loadAllRuns());
	return APIUtil.fetchAllRuns()
		.then(runs => dispatch(receiveAllRuns(runs)));
};

export const requestSingleRun = (id) => (dispatch) => {
	dispatch(loadSingleRun());
	return APIUtil.fetchSingleRun(id).then(run => {
		dispatch(receiveSingleRun(run));
    // why return run below????
		return run;
	}).fail(error => dispatch(receiveRunErrors(error.responseJSON)));
};

export const createRun = (run) => (dispatch) => (
	APIUtil.createRun(run).then(run => {
		dispatch(receiveNewRun(run));
		return run;
  }).fail(error => dispatch(receiveRunErrors(error.responseJSON)))
);

export const updateRun = (run) => (dispatch) => (
	APIUtil.updateRun(run).then(run => {
		dispatch(receiveSingleRun(run));
		return run;
	}).fail(error => dispatch(receiveRunErrors(error.responseJSON)))
);

export const deleteRun = (id) => (dispatch) => (
	APIUtil.deleteRun(id).then(run => {
		dispatch(removeRun(run));
		return run;
	}).fail(error => dispatch(receiveRunErrors(error.responseJSON)))
);
