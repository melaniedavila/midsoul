import { connect } from 'react-redux';
import NewRoute from './new_route';
import { createRoute, receiveRouteErrors } from '../../../actions/routes_actions';

const mapStateToProps = (state) => {
  return {  errors: state.errors,
            currentUser: state.session.currentUser };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createRoute: route => dispatch(createRoute(route)),
    clearErrors: () => dispatch(receiveRouteErrors({}))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRoute);
