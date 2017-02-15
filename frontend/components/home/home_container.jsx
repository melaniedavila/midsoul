import { connect } from 'react-redux';
import Home from './home';
import { login } from '../../actions/session_actions';
import { hashHistory } from 'react-router';

const mapStateToProps = function (state) {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    login: (user) => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
