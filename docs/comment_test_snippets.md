//////////////////////////////////////////////////////////////////////////////


testruncomment = {
  author_id: 1,
  commentable_id: 1,
  commentable_type: 'Run',
  body: 'test1body'
}
a = testruncomment => console.log(receiveNewRunComment(testruncomment));
createRunComment(1, testruncomment).then(a);


testroutecomment = {
  author_id: 1,
  commentable_id: 1,
  commentable_type: 'Route',
  body: 'test2body'
}
b = testroutecomment => console.log(receiveNewRouteComment(testroutecomment));
createRouteComment(1, testroutecomment).then(b);


c = runComment => console.log(removeRunComment(runComment));
deleteRunComment(1, 1).then(c);


d = routeComment => console.log(removeRouteComment(routeComment));
deleteRouteComment(1, 1).then(d);




////////////////////////////////////////////////////////////////////



testrun = {
description: 'Description1',
duration: 1
}
store.getState();
c = run => store.dispatch(receiveSingleRun(run));
createRun(testrun).then(c);
store.getState();



store.getState();
const e = run => store.dispatch(removeRun(run));
deleteRun(5).then(e);
store.getState();
