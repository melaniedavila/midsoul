@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.f_name user.f_name
    json.l_name user.l_name
    json.profile_picture user.profile_picture.url(:small)
  end
end
