import { connect } from 'react-redux';
import Navigation from './navigation';
import { logout } from '../../actions/session_actions';
import { hashHistory } from 'react-router';

const mapStateToProps = function (state) {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = function (dispatch) {
  return {
    logout: () => {
      dispatch(logout()).then(() => hashHistory.push('/login'));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
