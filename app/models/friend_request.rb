# == Schema Information
#
# Table name: friend_requests
#
#  id           :integer          not null, primary key
#  requestor_id :integer          not null
#  requestee_id :integer          not null
#  status       :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class FriendRequest < ActiveRecord::Base
  validates :requestee_id, :requestor_id, :status, presence: true
  validates_uniqueness_of :requestor_id, :scope => [:requestee_id]
  enum status: {
    pending: 0,
    accepted: 1,
    rejected: 2
  }

  belongs_to(
    :requestor,
    primary_key: :id,
    foreign_key: :requestor_id,
    class_name: 'User')

  belongs_to(
    :requestee,
    primary_key: :id,
    foreign_key: :requestee_id,
    class_name: 'User')
end
