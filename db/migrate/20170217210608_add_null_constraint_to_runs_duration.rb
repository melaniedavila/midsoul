class AddNullConstraintToRunsDuration < ActiveRecord::Migration
  def change
    change_column :runs, :duration, :integer, null: false
  end
end
