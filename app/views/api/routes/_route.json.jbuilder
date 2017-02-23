# json.extract! route, :id, :title, :description, :image_url, :distance, :elevation_gain
# json.extract! creator, :id, :f_name, :l_name, :image_url

# above ok????

json.extract! route, \
  :id, :polyline, :creator_id, :title, :description, \
  :distance, :elevation_gain, :created_at

json.set! :creator do
  json.partial! 'api/users/user', user: route.creator
end

json.comments do
  json.array! route.comments, partial: 'api/comments/comment', as: :comment
end
