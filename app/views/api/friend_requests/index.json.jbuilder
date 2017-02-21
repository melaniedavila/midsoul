@friend_requests.each do |friend_request|
  json.set! friend_request.id do
    json.extract! friend_request, :id, :requestor_id, :requestee_id, :status
      json.set! :requestor do
        user = User.find_by(id: friend_request.requestor_id)
        json.partial! 'api/users/user', user: user
      end
  end
end
