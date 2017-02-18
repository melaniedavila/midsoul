import { connect } from 'react-redux';
import RunShow from './run_show';
import { requestSingleRun } from '../../../actions/runs_actions';

// const mapStateToProps = (state, ownProps) => ({
  // errors: state.errors,
  // run: state.runs[ownProps.params.runId],
  // loading: state.loading.singleItemLoading
// });


const mapStateToProps = function (state, ownProps) {
  debugger
  let errors;
  if (state.runs.errors) {
    errors = state.runs.errors
  }


  return({
    errors: errors,
    run: state.runs[ownProps.params.runId],
    loading: state.loading.singleItemLoading
  })
}


const mapDispatchToProps = dispatch => ({
  requestSingleRun: id => dispatch(requestSingleRun(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RunShow);
