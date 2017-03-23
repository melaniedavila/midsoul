class AddSortByDateToFeedItems < ActiveRecord::Migration
  def change
    add_column :feed_items, :sortby_date, :date, null: false
  end
end
