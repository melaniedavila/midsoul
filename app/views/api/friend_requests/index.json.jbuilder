@friend_requests.each do |friend_request|
  json.set! friend_request.id do
    json.extract! friend_request, :id, :requestor_id, :requestee_id, :status
    # json.image_url asset_path(route.image_url)
  end
end
