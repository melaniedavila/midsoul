class ReplaceRunTimesWithDuration < ActiveRecord::Migration
  def change
    remove_column :runs, :start_time
    remove_column :runs, :end_time
    add_column :runs, :duration, :integer
  end
end
