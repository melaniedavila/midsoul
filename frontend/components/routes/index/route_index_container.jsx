import { connect } from 'react-redux';
import RouteIndex from './route_index';
import { selectAllRoutes } from '../../../reducers/selectors';
import { requestAllRoutes } from '../../../actions/route_actions';

function mapStateToProps(state) {
  return {
    routes: selectAllRoutes(state),
    loading: state.loading.indexLoading
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
