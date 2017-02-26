json.extract! user, :id, :f_name, :l_name, :created_at
# below sets default profile pic size
json.currentUserFriendRequest user.received_friend_requests.find { |fr| fr.requestor == current_user }
json.profile_picture user.profile_picture.url(:small)
