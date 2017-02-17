import { connect } from 'react-redux';
import RouteShow from './route_show';
import { requestSingleRoute } from '../../../actions/routes_actions';

const mapStateToProps = (state, ownProps) => ({
  route: state.routes[ownProps.params.routeId],
  loading: state.loading.singleItemLoading
});

const mapDispatchToProps = dispatch => ({
  requestSingleRoute: id => dispatch(requestSingleRoute(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteShow);
