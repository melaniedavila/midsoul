import { connect } from 'react-redux';
import Navigation from './navigation';
import { logout } from '../../actions/session_actions';

const mapStateToProps = function (state) {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = function (dispatch) {
  return ({ logout: () => dispatch(logout()) });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
