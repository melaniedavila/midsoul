import { values } from 'lodash';

export const selectAllRoutes = ({ routes }) => values(routes);
export const selectAllRuns = ({ runs }) => values(runs);
