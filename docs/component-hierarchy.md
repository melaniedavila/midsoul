# Component Hierarchy

**AuthFormContainer**
- SignUpForm
  - FormErrors
- LoginForm
  - FormErrors

**NavigationContainer**
- Navigation
- Logout

**RunIndexContainer**
- RunIndex
  - RunIndexItem
    - Comments
      - Comment

**RouteIndexContainer**
- RouteIndex
  - RouteIndexItem
    - Comments
      - Comment

**FriendsIndexContainer**
- FriendsIndex
  - FriendsIndexItem

**FindFriendsContainer**
- Search
  - SearchResults

**FriendRequestsContainer**
- FriendRequestsIndex
  - FriendRequestsIndexItem

**ActivityFeedContainer**
- ActivityFeed
  - ActivityFeedItem
    - Comments
      - Comment

**UserShowContainer**
- UserShow
- ActivityFeed
  - ActivityFeedItem
    - Comments
      - Comment

**GoalsIndexContainer**
- GoalsIndex
  - GoalIndexItem

**NewRouteContainer**
- NewRouteForm

**NewRunContainer**
- NewRunForm

**NewCommentContainer**
- NewCommentForm

**NewGoalContainer**
- NewGoalForm

# Routes
|Path |	Component |
| ------------- | ------------- |
| /signup | AuthFormContainer |
| /login | AuthFormContainer |
| /create-route | NewRouteContainer |
| /runs | RunIndexContainer |
| /routes | RouteIndexContainer |
| /log-run | RunIndexContainer |
| /friends | FriendsIndexContainer |
| /find-friends | FindFriendsContainer |
| /friend-requests | FriendRequestsContainer |
| /feed | ActivityFeedContainer |
| /users/:id | UserShowContainer |
| /goals | GoalsIndexContainer |
| /create-goal | NewGoalContainer |
