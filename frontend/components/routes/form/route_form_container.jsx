import { connect } from 'react-redux';
import RouteForm from './route_form';
import { requestSingleRoute, createRoute, updateRoute } from '../../../actions/routes_actions';

const mapStateToProps = (state, ownProps) => {
  let route = { title: "", description: "", path: "" };
  if(ownProps.params) {
    route = state.routes[ownProps.params.routeId];
  }

  let formType = ownProps.formType || "edit";
  let errors = state.errors;
  return { route, formType, errors };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.formType === "new" ? createRoute : updateRoute;
  return {
    requestSingleRoute: id => dispatch(requestSingleRoute(id)),
    action: route => dispatch(action(route))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteForm);
