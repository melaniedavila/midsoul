{
  creator_id: 8,
  title: 'Title4',
  description: 'Description4',
  path: 'linestring4',
  image_url:'url',
  distance: 4,
  elevation_gain: 4
}


$.ajax({method:'POST', url: 'api/routes/', data:
  {
    route: {
    title: 'Title4',
    description: 'Description4',
    path: 'linestring4'
    }
  }
})

$.ajax({method:'PATCH', url: 'api/routes/7', data:
  {
    route: {
    title: 'test',
    description: 'Description4',
    path: 'linestring4'
    }
  }
})

$.ajax({method:'DELETE', url: 'api/routes/7'})


//////////////////////////////////////////////////////////////////////////////

z4 = (routes) => console.log(receiveAllRoutes(routes));
fetchAllRoutes().then(z4)


const b = route => console.log(receiveSingleRoute(route));
fetchSingleRoute(8).then(b);


testroute = {
title: 'test',
description: 'Description4',
path: 'linestring4'
}
const c1 = route => console.log(receiveSingleRoute(route));
createRoute(testroute).then(c1);



testroute4 = {
  id: 15,
  title: 'updated'
}
const d3 = route => console.log(receiveSingleRoute(route));
updateRoute(testroute4).then(d3);

const e = route => console.log(removeRoute(route));
deleteRoute(10).then(e);



////////////////////////////////////////////////////////////////////

store.getState();
a = routes => store.dispatch(receiveAllRoutes(routes));
fetchAllRoutes().then(a);
store.getState();



store.getState();
b = route => store.dispatch(receiveSingleRoute(route));
fetchSingleRoute(8).then(b);
store.getState();



testroute = {
title: 'testcreate',
description: 'Description4',
path: 'linestring4'
}
store.getState();
c = route => store.dispatch(receiveSingleRoute(route));
createRoute(testroute).then(c);
store.getState();



testrouteupdate = {
  id: 12,
  title: 'updated'
}
store.getState();
const d = route => store.dispatch(receiveSingleRoute(route));
updateRoute(testrouteupdate).then(d);
store.getState();


store.getState();
const e = route => store.dispatch(removeRoute(route));
deleteRoute(16).then(e);
store.getState();
