class AddDefaultToFriendRequest < ActiveRecord::Migration
  def change
    change_column :friend_requests, :status, :integer, :default => 1
  end
end
