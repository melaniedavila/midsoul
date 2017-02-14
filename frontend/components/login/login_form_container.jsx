import { connect } from 'react-redux';
import LogInForm from './login_form';
import { login, receiveErrors } from '../../actions/session_actions';

function mapStateToProps(state) {
  return ({errors: state.session.errors});
}

function mapDispatchToProps(dispatch) {
  return ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(receiveErrors({}))
  });
}
