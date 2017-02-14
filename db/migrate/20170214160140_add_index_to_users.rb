class AddIndexToUsers < ActiveRecord::Migration
  def change
    add_index :users, :email, unique: true
    add_index :users, :f_name
    add_index :users, :l_name
    add_index :users, :session_token, unique: true
  end
end
