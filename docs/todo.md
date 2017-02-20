user show- add single user's activities; think about how you can reuse it with friends feed
- ensure only self and friends can see profile
- styling

user edit
- bug: only see edit page if you visit edit after visiting user
- only edit self
- add prof pic
- styling
-Paperclip::AdapterRegistry::NoHandlerError - No handler found for "/profile_pictures/original/missing.png":
-test form


-friendships: why no timestamps in schema if migration had timestamps?

todos:
friends
search
friend request
friend feed
inc user pic/name, activity description and map pic
paperclip

/////////////////////////////////////////////////////////////////////////////



- order my runs in reverse chronological order
- format date in run-related pages
- fix default prof pic. img not found
- fix sign up blank first and last name errors
- fix logout button (current jumping)
- errors_list styling in login/signup forms
- render errors when trying to access run not authorized to see
- render map details in chart
- update route JSON views

git push heroku master
heroku run bundle exec rake db:migrate
heroku run bundle install
heroku run rake db:seed
