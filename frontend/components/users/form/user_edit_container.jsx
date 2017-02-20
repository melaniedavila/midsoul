import { connect } from 'react-redux';
import UserEdit from './user_edit';
import { requestSingleUser, updateUser } from '../../../actions/users_actions';

const mapStateToProps = (state, ownProps) => {

  return(
    {currentUser: state.session.currentUser,
    user: state.users[ownProps.params.userId],
    loading: state.loading.singleItemLoading}
  );
};

const mapDispatchToProps = dispatch => ({
  requestSingleUser: id => dispatch(requestSingleUser(id)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEdit);
