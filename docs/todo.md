- fix default prof pic. img not found
- fix sign up blank first and last name errors
- fix logout button (current jumping)
- errors_list styling in login/signup forms
- render errors when trying to access run not authorized to see
- render map details in chart
- - update route JSON views

git push heroku master
heroku run bundle exec rake db:migrate
heroku run bundle install
heroku run rake db:seed
