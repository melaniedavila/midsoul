import { connect } from 'react-redux';
import { signUp, receiveErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';

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
