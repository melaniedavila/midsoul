@routes.each do |route|
  json.set! route.id do
    json.extract! route, :id, :creator_id, :title, :description, :distance, :elevation_gain, :polyline
    # json.image_url asset_path(route.image_url)
  end
end
