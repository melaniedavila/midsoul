export const RECEIVE_ALL_ROUTES    = 'RECEIVE_ALL_ROUTES';
export const RECEIVE_SINGLE_ROUTE = 'RECEIVE_SINGLE_ROUTE';
export const RECEIVE_NEW_ROUTE    = 'RECEIVE_NEW_ROUTE';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';
export const LOAD_ALL_ROUTES = 'LOAD_ALL_ROUTES ';
export const LOAD_SINGLE_ROUTE = 'LOAD_SINGLE_ROUTE';
export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS';

import * as APIUtil from '../util/routes_api_util';

export const loadAllRoutes = () => ({
  type: LOAD_ALL_ROUTES
});

export const loadSingleRoute = () => ({
  type: LOAD_SINGLE_ROUTE
});

export const receiveAllRoutes = function (routes) {
  return({
    type: RECEIVE_ALL_ROUTES,
    routes
  });
};

export const receiveSingleRoute = (route) => ({
  type: RECEIVE_SINGLE_ROUTE,
  route
});

export const receiveNewRoute = (route) => ({
  type: RECEIVE_NEW_ROUTE,
  route
});

export const removeRoute = (route) => ({
  type: REMOVE_ROUTE,
  route
});

export const receiveRouteErrors = (errors) => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors
});


export const requestAllRoutes = () => (dispatch) => {
	dispatch(loadAllRoutes());
	return APIUtil.fetchAllRoutes()
		.then(routes => dispatch(receiveAllRoutes(routes)));
};

export const requestSingleRoute = (id) => (dispatch) => {
	dispatch(loadSingleRoute());
	return APIUtil.fetchSingleRoute(id).then(route => {
		dispatch(receiveSingleRoute(route));
		return route;
	}).fail(error => dispatch(receiveRouteErrors(error.responseJSON)));
};

export const createRoute = (route) => (dispatch) => (
	APIUtil.createRoute(route).then(route => {
		dispatch(receiveNewRoute(route));
		return route;
	}).fail(error => dispatch(receiveRouteErrors(error.responseJSON)))
);

export const updateRoute = (route) => (dispatch) => (
	APIUtil.updateRoute(route).then(route => {
		dispatch(receiveSingleRoute(route));
		return route;
	}).fail(error => dispatch(receiveRouteErrors(error.responseJSON)))
);

export const deleteRoute = (id) => (dispatch) => (
	APIUtil.deleteRoute(id).then(route => {
		dispatch(removeRoute(route));
		return route;
	}).fail(error => dispatch(receiveRouteErrors(error.responseJSON)))
);
