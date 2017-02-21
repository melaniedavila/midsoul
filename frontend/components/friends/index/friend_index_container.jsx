import { connect } from 'react-redux';
import FriendIndex from './friend_index';
import { requestCurrentUserFriends } from '../../../actions/friendships_actions';
import { selectAllFriends } from '../../../reducers/selectors';


const mapStateToProps = (state) => {

  return(
    {
      errors: state.errors,
      friends: selectAllFriends(state),
      loading: state.loading.indexLoading
    }
  );
};

const mapDispatchToProps = dispatch => ({
  requestCurrentUserFriends: () => dispatch(requestCurrentUserFriends())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendIndex);
