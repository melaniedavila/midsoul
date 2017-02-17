class CreateRuns < ActiveRecord::Migration
  def change
    create_table :runs do |t|
      t.integer :runner_id, null: false
      t.integer :route_id, null: false
      t.date :date, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false
      t.text :description
      t.timestamps null: false
    end
  end
end
