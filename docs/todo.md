user show-
- ensure only self and friends can see profile activity feed
- styling

user edit
- add prof pic
- styling

todos:
friends
search
friend request
friend feed
inc user pic/name, activity description and map pic

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
