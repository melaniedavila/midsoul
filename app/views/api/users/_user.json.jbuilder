json.extract! user, :id, :f_name, :l_name, :created_at
# below sets default profile pic size
json.profile_picture user.profile_picture.url(:small)
