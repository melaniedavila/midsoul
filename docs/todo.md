START WITH TESTING FEED ACTIONS!!!!
then user pic sizing with paperclip

user show-
- ensure only self and friends can see profile activity feed
- styling

user edit
- add prof pic
- styling

friend request
- styling

friends
- styling

search
- styling

todos:
friend feed
inc user pic/name, activity description and map pic

/////////////////////////////////////////////////////////////////////////////

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

git push heroku master
heroku run bundle exec rake db:migrate
heroku run bundle install
heroku run rake db:seed
