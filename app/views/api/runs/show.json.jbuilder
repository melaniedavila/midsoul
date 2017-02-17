json.partial! 'api/runs/run', run: @run

# json.image_url asset_path(@run.image_url)

# line below resulted in response with id and creator_id being the same (even if false)
# json.extract! @run.creator, :id, :f_name, :l_name, :image_url

# json.comments do
#   json.array! @run.comments, partial: 'api/comments/comment', as: :comment
# end
