json.partial! 'api/users/user', user: @user
json.runs do
  json.array! @user.runs, partial: 'api/runs/run', as: :run
end
json.routes do
  json.array! @user.routes, partial: 'api/routes/route', as: :route
end
