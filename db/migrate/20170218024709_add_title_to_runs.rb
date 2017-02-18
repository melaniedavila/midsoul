class AddTitleToRuns < ActiveRecord::Migration
  def change
    add_column :runs, :title, :string, null: false
  end
end
