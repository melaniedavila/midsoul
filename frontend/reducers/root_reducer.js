import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import loadingReducer from './loading_reducer';
import routesReducer from './routes_reducer';
import sessionReducer from './session_reducer';



const rootReducer = combineReducers({
  errors: errorsReducer,
  loading: loadingReducer,
  routes: routesReducer,
  session: sessionReducer
});

export default rootReducer;
