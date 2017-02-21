class ChangeDefaultFriendRequestValueToZero < ActiveRecord::Migration
  def change
    change_column :friend_requests, :status, :integer, :default => 0
  end
end
