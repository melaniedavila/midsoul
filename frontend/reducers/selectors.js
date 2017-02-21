import { values } from 'lodash';

export const selectAllRoutes = ({ routes }) => values(routes);
export const selectAllRuns = ({ runs }) => values(runs);
export const selectAllUsers = ({ users }) => values(users);
export const selectAllFriendRequests = ({ friendRequests }) => values(friendRequests);

// json data has friends objects, not friendship objects, despite names of arguments
// and keys in state
export const selectAllFriends = ({ friendships }) => values(friendships);
