@routes.each do |route|
  json.set! route.id do
    json.extract! route, :id, :creator_id, :title, :description, :distance, :elevation_gain, :polyline
  end
end
