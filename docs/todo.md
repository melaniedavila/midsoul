
///////////
bugs: when i click 'EDIT PROFILE button' on own show page need to refresh before i'm redirected
when i accept friend request, tab doesn't auto update
when i click user on user in find friends, need to refresh to see profile

/////////////////////////////////////////////////////////////////////////////
- add activity date to feed items
- fix friend requests styling
- on friends search page- change 'add' text after clicked
- require logged in in controllers (all controllers :( )
- order my runs in reverse chronological order
- format date in run-related pages
- fix default prof pic. img not found
- fix sign up blank first and last name errors
- fix logout button (current jumping)
- errors_list styling in login/signup forms
- render errors when trying to access run not authorized to see
- render map details in chart
- update route JSON views
- give loading actions corresponding reducers. currently only using loading reducer for routes
- fix bad naming in friendships. for example friendships index action returns friends
- add/delete friend button on user show page
- optimize userscontroller index query with .or
- dont allow users to friend themselves, current friends or people who have sent them requests
- ensure only self and friends can see profile activity feed



git push heroku master
heroku run bundle exec rake db:migrate
heroku run bundle install
heroku run rake db:seed
