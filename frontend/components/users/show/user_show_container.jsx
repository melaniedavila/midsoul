import { connect } from 'react-redux';
import UserShow from './user_show';
import { requestSingleUser } from '../../../actions/users_actions';

const mapStateToProps = (state, ownProps) => {
  // NOTE: state has no users atm
  // debugger
  return(
    {currentUser: state.session.currentUser,
    user: state.users[ownProps.params.userId],
    loading: state.loading.singleItemLoading}
  );
};

const mapDispatchToProps = dispatch => ({
  requestSingleUser: id => dispatch(requestSingleUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
