json.extract! route, \
  :id, :polyline, :creator_id, :title, :description, \
  :distance, :elevation_gain, :created_at

json.set! :creator do
  json.partial! 'api/users/user', user: route.creator
end

json.run_count route.runs.count

json.comments do
  json.array! route.comments, partial: 'api/comments/comment', as: :comment
end
