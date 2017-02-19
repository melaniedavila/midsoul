class RemovePathFromRoutes < ActiveRecord::Migration
  def change
    remove_column :routes, :path
  end
end
