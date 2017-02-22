# debugger
@feed_items.each do |feed_item|
  json.set! feed_item.id do
    type = feed_item.feedable_type.downcase

    json.extract! feed_item, :feedable_type

    json.set! :feedable do
      json.partial!(
        "api/#{type}s/#{type}",
        type.to_sym => feed_item.feedable
      )
    end
    # 
    # if type == 'route'
    #   json.set! :user do
    #     json.partial! 'api/users/user', user: feed_item.user
    #   end
    # end
  end
end



# @runs.each do |run|
#   json.set! run.id do
#     json.extract! run, :id, :runner_id, :route_id, :date, :description, :duration, :title
#     json.set! :route do
#       json.partial! 'api/routes/route', route: run.route
#     end
#   end
# end
