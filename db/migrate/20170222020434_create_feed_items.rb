class CreateFeedItems < ActiveRecord::Migration
  def change
    create_table :feed_items do |t|
      t.integer :feedable_id, null: false
      t.string :feedable_type, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :feed_items, [:feedable_type, :feedable_id]
    add_index :feed_items, :user_id
  end
end
