import { merge, assign } from 'lodash';
import {  RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER, REMOVE_USER,
          RECEIVE_NEW_USER, RECEIVE_USER_ERRORS } from '../actions/users_actions';
import { REMOVE_RUN } from '../actions/runs_actions';
import { REMOVE_ROUTE } from '../actions/routes_actions';

export default function usersReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, action.users);
    case RECEIVE_SINGLE_USER:
    case RECEIVE_NEW_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case REMOVE_USER:
      let newState = merge({}, state);
      delete newState[action.user.id];
      return newState;
    case REMOVE_RUN:
    case REMOVE_ROUTE:
      let postRemoveState = merge({}, state);
      const user = postRemoveState[Object.keys(postRemoveState)];

      if (user) {
        let activityToRemoveIndex;
        let activities = action.run ? user.runs : user.routes;
        let activityToRemoveId = action.run ? action.run.id : action.route.id;
        activityToRemoveIndex = activities.findIndex(function (activity) {
          return activity.id === activityToRemoveId;
        });
        activities.splice(activityToRemoveIndex, 1);
        return postRemoveState;
      } else {
        return state;
      }
    default:
      return state;
  }
}
