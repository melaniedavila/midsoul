import { connect } from 'react-redux';
import { requestSingleRun, deleteRun } from '../../../actions/runs_actions';
import { requestSingleUser } from '../../../actions/users_actions';
import RunShow from './run_show';
import { receiveRunErrors } from '../../../actions/runs_actions';

const mapStateToProps = function (state, ownProps) {
  let errors;
  if (state.runs.errors) {
    errors = state.runs.errors;
  }

  return({
    errors: errors,
    run: state.runs[ownProps.params.runId],
    currentUser: state.session.currentUser,
    loading: state.loading.singleItemLoading
  });
};

const mapDispatchToProps = dispatch => ({
  requestSingleRun: id => dispatch(requestSingleRun(id)),
  clearErrors: () => dispatch(receiveRunErrors({})),
  deleteRun: id => dispatch(deleteRun(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RunShow);
