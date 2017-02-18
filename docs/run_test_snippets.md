//////////////////////////////////////////////////////////////////////////////

a = (runs) => console.log(receiveAllRuns(runs));
fetchAllRuns().then(a)


b = run => console.log(receiveSingleRun(run));
fetchSingleRun(1).then(b);


testrun = {
description: 'Description1',
duration: 1
}
c1 = run => console.log(receiveSingleRun(run));
createRun(testrun).then(c1);



testrun = {
  id: 1,
description: 'updated',
duration: 1
}
d = run => console.log(receiveSingleRun(run));
updateRun(testrun).then(d);


e = run => console.log(removeRun(run));
deleteRun(4).then(e);



////////////////////////////////////////////////////////////////////

store.getState();
a = runs => store.dispatch(receiveAllRuns(runs));
fetchAllRuns().then(a);
store.getState();



store.getState();
b = run => store.dispatch(receiveSingleRun(run));
fetchSingleRun(1).then(b);
store.getState();



testrun = {
description: 'Description1',
duration: 1
}
store.getState();
c = run => store.dispatch(receiveSingleRun(run));
createRun(testrun).then(c);
store.getState();



testrunupdate = {
  id: 1,
  description: 'yahooo',
  duration: 1
}
store.getState();
const d = run => store.dispatch(receiveSingleRun(run));
updateRun(testrunupdate).then(d);
store.getState();

store.getState();
const e = run => store.dispatch(removeRun(run));
deleteRun(5).then(e);
store.getState();


//////////////////////////////

initialState = store.getState();
selectAllRuns(initialState);

store.dispatch(requestAllRuns());

populatedState = store.getState();
selectAllRuns(populatedState);
