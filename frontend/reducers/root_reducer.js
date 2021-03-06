import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import friendRequestsReducer from './friend_requests_reducer';
import friendsSearchReducer from './friends_search_reducer';
import friendshipsReducer from './friendships_reducer';
import loadingReducer from './loading_reducer';
import routesReducer from './routes_reducer';
import runsReducer from './runs_reducer';
import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';
import feedsReducer from './feeds_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  loading: loadingReducer,
  routes: routesReducer,
  runs: runsReducer,
  session: sessionReducer,
  users: usersReducer,
  friendRequests: friendRequestsReducer,
  friendships: friendshipsReducer,
  friendsSearch: friendsSearchReducer,
  feeds: feedsReducer
});

export default rootReducer;
