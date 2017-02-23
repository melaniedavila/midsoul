json.extract! run, :id, :runner_id, :date, :description, :duration, :title, :created_at
json.set! :runner do
  json.partial! 'api/users/user', user: run.runner
end
json.set! :route do
  json.partial! 'api/routes/route', route: run.route
end

json.comments do
  json.array! run.comments, partial: 'api/comments/comment', as: :comment
end
