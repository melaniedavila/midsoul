import { values } from 'lodash';

export const selectAllRoutes = ({ routes }) => values(routes);
export const selectAllRuns = ({ runs }) => values(runs);
export const selectAllUsers = ({ users }) => values(users);
