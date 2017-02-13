```js
{
  session: {
    currentUserId: 1,
    errors: []
  },
  myFriends: {
    userIds: [11]
  },
  findFriends: {
    userIds: [2]
  },
  friendRequests: {
    userIds: [4]
  },
  feed: {
    activities: [
      {
        id: 4:
        type: 'run'
      },
      {
        id: 4:
        type: 'route'
      }
    ]
  },
  myRoutes: {
    routeIds: [1]
  },
  routeShow: {
    routeId: 1
  },
  userShow: {
    userId: 4
  },
  runShow: {
    runId: 4
  },
  runs: {
    byId: {
      4: {
        id: 4
        userId: 1,
        routeId: 1,
        date: '12-18-2016',
        distance: 7.2,
        imageUrl: 'url'
        comments: []
      }
    },
    allIds: [4]
  },
  users: {
    byId: {
      1: {
        id: 1,
        firstName: 'Sweaty',
        lastName: 'Betty'
      },
      2: {
        id: 2,
        firstName: 'Derek',
        lastName: 'Zoolander'
        imageUrl: 'url'
      },
      4: {
        id: 4,
        firstName: 'Jacobim',
        lastName: 'Mugatu',
        imageUrl: 'url'
      },
      11: {
        id: 11,
        firstName: 'Scott',
        lastName: 'Jurek',
        imageUrl: 'url'
      }
    },
    allIds: [1, 2, 4, 11]
  }
  routes: {
    byId: {
      1: {
        id: 1,
        userId: 1,
        title: 'Harlem Hill',
        description: 'A scenic route in Central Park',
        path: [
          [-71.160281, 42.258729],
          [-71.160837, 42.259113],
          [-71.161144, 42.25932]
        ],
        imageUrl: 'url',
        comments: [1]
      }
    },
    allIds: [1]
  },
  comments: {
    byId: {
      1: {
        id: 1
        authorId: 2,
        commentableId: 1,
        commentableType: 'route',
        body: 'Great route, Betty!'
      }
    },
    allIds: [1]
  },
  goals: {
    byId: {
      1: {
        id: 1
        authorId: 2,
        type: 'distance',
        target: 1000,
        startDate: '02-12-2017',
        endDate: '02-17-2017',
        description: 'Train for the walk off!',
        loggedTime: 1,
        loggedDistance: 3  
      }
    },
    allIds: [1]
  },
}
```
