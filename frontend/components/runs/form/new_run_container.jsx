import { connect } from 'react-redux';
import NewRun from './new_run';
import { createRun, receiveRunErrors } from '../../../actions/runs_actions';
import { requestAllRoutes } from '../../../actions/routes_actions';
import { selectAllRoutes } from '../../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    currentUser: state.session.currentUser,
    routes: selectAllRoutes(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createRun: run => dispatch(createRun(run)),
    clearErrors: () => dispatch(receiveRunErrors({})),
    requestAllRoutes: () => dispatch(requestAllRoutes()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRun);
