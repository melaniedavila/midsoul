class AddPolylineToRoutes < ActiveRecord::Migration
  def change
    add_column :routes, :polyline, :text, null: false
  end
end
