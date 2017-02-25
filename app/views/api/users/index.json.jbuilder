@users.each do |user|
  # json.partial! 'api/users/user', user: @user
  json.set! user.id do
    json.partial! 'api/users/user', user: user
    
  end

  # json.set! user.id do
  #   json.id user.id
  #   json.f_name user.f_name
  #   json.l_name user.l_name
  #   json.created_at user.created_at
  #   json.profile_picture user.profile_picture.url(:small)
  # end

  # json.runs do
  #   json.array! @user.runs.order('date desc'), partial: 'api/runs/run', as: :run
  # end
  # json.routes do
  #   json.array! @user.routes, partial: 'api/routes/route', as: :route
  # end
end
