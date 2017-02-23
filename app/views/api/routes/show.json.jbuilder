# json.extract! @route, :id, :creator_id, :title, :description, :distance, :elevation_gain, :polyline
# above works and was original
json.partial! 'api/routes/route', route: @route




# json.image_url asset_path(@route.image_url)

# line below resulted in response with id and creator_id being the same (even if false)
# json.extract! @route.creator, :id, :f_name, :l_name, :image_url

# json.comments do
#   json.array! @route.comments, partial: 'api/comments/comment', as: :comment
# end
