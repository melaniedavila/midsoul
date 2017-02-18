import { connect } from 'react-redux';
import NewRun from './new_run';
import { createRun, receiveRunErrors } from '../../../actions/runs_actions';

const mapStateToProps = (state) => {
  return {  errors: state.errors,
            currentUser: state.session.currentUser };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createRun: run => dispatch(createRun(run)),
    clearErrors: () => dispatch(receiveRunErrors({}))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRun);
