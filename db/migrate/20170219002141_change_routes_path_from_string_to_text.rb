class ChangeRoutesPathFromStringToText < ActiveRecord::Migration
  def change
    change_column :routes, :path, :text, null: false
  end
end
