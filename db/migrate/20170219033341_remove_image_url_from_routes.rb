class RemoveImageUrlFromRoutes < ActiveRecord::Migration
  def change
    remove_column :routes, :image_url
  end
end
