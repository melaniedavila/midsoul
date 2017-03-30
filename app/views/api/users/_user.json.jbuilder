json.extract! user, :id, :f_name, :l_name, :created_at

# Below finds friend request were user is either the requestor or requestee
json.currentUserFriendRequest user.received_friend_requests.find { |fr| fr.requestor == current_user } ||
        user.sent_friend_requests.find { |fr| fr.requestee == current_user }

# Below sets default profile pic size
json.profile_picture user.profile_picture.url(:small)
