# json.extract! route, :id, :title, :description, :image_url, :distance, :elevation_gain
# json.extract! creator, :id, :f_name, :l_name, :image_url

# above ok????
json.extract! route, \
  :id, :polyline, :creator_id, :title, :description, \
  :distance, :elevation_gain
