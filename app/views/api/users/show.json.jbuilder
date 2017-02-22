json.partial! 'api/users/user', user: @user
json.profile_picture @user.profile_picture.url(:medium) # this overrides partial profile pic

json.runs do
  json.array! @user.runs.order('date desc'), partial: 'api/runs/run', as: :run
end
json.routes do
  json.array! @user.routes, partial: 'api/routes/route', as: :route
end
