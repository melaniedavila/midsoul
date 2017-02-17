- fix default prof pic. img not found
- fix sign up blank first and last name errors
- fix logout button (current jumping)
- errors_list styling in login/signup forms


git push heroku master
heroku run bundle exec rake db:migrate
heroku run bundle install
heroku run rake db:seed
