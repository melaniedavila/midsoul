BUGS:
when i click 'EDIT PROFILE button' on own show page need to refresh before i'm redirected
when i accept friend request, tab doesn't auto update
when i click user on user in find friends, need to refresh to see profile

/////////////////////////////////////////////////////////////////////////////
BACKEND
- optimize userscontroller index query with .or
FRIEND REQUESTS
- fix friend requests styling
- don't allow users to friend themselves, current friends or people who have sent them requests
FRIEND SEARCH
- on friends search page- change 'add' text after clicked
- fix bad naming in friendships. for example friendships index action returns friends
RUNS
- order my runs in reverse chronological order
- render errors when trying to access run not authorized to see
USER SHOW
- fix default prof pic. img not found
- add/delete friend button on user show page
- ensure only self and friends can see profile activity feed
USER EDIT
- styling, remove centering
AUTH
- fix sign up blank first and last name errors
- fix logout button (current jumping)
- errors_list styling in login/signup forms
MAP
- render map details in chart
LOADING
- give loading actions corresponding reducers. currently only using loading reducer for routes
