//////////////////////////////////////////////////////////////////////////////


testruncomment = {
  author_id: 1,
  commentable_id: 1,
  commentable_type: 'Run',
  body: 'Run Comment 2 Body'
}
a = testruncomment => console.log(receiveNewRunComment(testruncomment));
createRunComment(1, testruncomment).then(a);


testroutecomment = {
  author_id: 1,
  commentable_id: 1,
  commentable_type: 'Route',
  body: 'Route Comment 1 Body'
}
b = testroutecomment => console.log(receiveNewRouteComment(testroutecomment));
createRouteComment(1, testroutecomment).then(b);


c = runComment => console.log(removeRunComment(runComment));
deleteComment(8).then(c);


d = routeComment => console.log(removeRouteComment(routeComment));
deleteComment(10).then(d);




////////////////////////////////////////////////////////////////////

testruncomment = {
  author_id: 1,
  commentable_id: 1,
  commentable_type: 'Run',
  body: 'Run Comment B Body'
}

store.getState();
a = testruncomment => store.dispatch(receiveNewRunComment(testruncomment));
createRunComment(1, testruncomment).then(a);
store.getState();


testroutecomment = {
  author_id: 1,
  commentable_id: 1,
  commentable_type: 'Route',
  body: 'Route Comment A Body'
}

store.getState();
b = testruncomment => store.dispatch(receiveNewRouteComment(testruncomment));
createRouteComment(1, testroutecomment).then(b);
store.getState();



store.getState();
const c = runComment => store.dispatch(removeRunComment(runComment));
deleteComment(NUMM!!!).then(c);
store.getState();


store.getState();
const d = routeComment => store.dispatch(removeRouteComment(routeComment));
deleteComment(NUMM!!!).then(d);
store.getState();
