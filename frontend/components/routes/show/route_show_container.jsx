import { connect } from 'react-redux';
import RouteShow from './route_show';
import { requestSingleRoute, deleteRoute } from '../../../actions/routes_actions';

const mapStateToProps = (state, ownProps) => {
  // NOTE: logout, hard refresh, routes/3 => state has no routes first 2 times
  // we hit the debugger. state has requested route 3rd time we hit the debugger
// debugger
return(
    {currentUser: state.session.currentUser,
    route: state.routes[ownProps.params.routeId],
    loading: state.loading.singleItemLoading}
  );
};

const mapDispatchToProps = dispatch => ({
  requestSingleRoute: id => dispatch(requestSingleRoute(id)),
  deleteRoute: id => dispatch(deleteRoute(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteShow);
