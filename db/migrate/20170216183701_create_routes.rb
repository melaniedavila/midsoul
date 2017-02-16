class CreateRoutes < ActiveRecord::Migration
  def change
    create_table :routes do |t|
      t.integer :creator_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.string :path, null: false
      t.string :image_url, null: false
      t.float :distance, null: false
      t.float :elevation_gain, null: false
      t.timestamps null: false
    end
  end
end
