import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signUp, receiveErrors } from '../../actions/session_actions';

function mapStateToProps(state) {
  return ({errors: state.session.errors});
}

function mapDispatchToProps(dispatch) {
  return ({
    signup: (user) => dispatch(signUp(user)),
    clearErrors: () => dispatch(receiveErrors({}))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
