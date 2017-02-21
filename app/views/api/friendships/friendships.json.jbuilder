@friendships.each do |friendship|
  json.set! friendship.id do
    json.id friendship.id
    json.user_id friendship.user_id
    json.friend_id friendship.friend_id
  end
end
