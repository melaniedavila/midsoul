import { connect } from 'react-redux';
import RouteIndex from './route_index';
import { selectAllRoutes } from '../../../reducers/selectors';
import { requestAllRoutes } from '../../../actions/routes_actions';

function mapStateToProps(state) {
  const routes = selectAllRoutes(state);
  const loading = state.loading.indexLoading || Object.keys(routes).length === 0;

  return {
    routes,
    loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestAllRoutes: () => dispatch(requestAllRoutes())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteIndex);
