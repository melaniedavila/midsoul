@feed_items.each do |feed_item|
  json.set! feed_item.id do
    type = feed_item.feedable_type.downcase
    json.extract! feed_item, :feedable_type

    json.set! :feedable do
      json.sortby_date = feed_item.sortby_date
      json.partial!(
        "api/#{type}s/#{type}",
        type.to_sym => feed_item.feedable
      )
    end
  end
end
