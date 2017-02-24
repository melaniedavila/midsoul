import { connect } from 'react-redux';
import RunIndex from './run_index';
import { selectAllRuns } from '../../../reducers/selectors';
import { requestAllRuns } from '../../../actions/runs_actions';

function mapStateToProps(state) {
  return {
    runs: selectAllRuns(state),
    loading: state.loading.indexLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestAllRuns: () => dispatch(requestAllRuns())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RunIndex);
