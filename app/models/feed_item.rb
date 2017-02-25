# == Schema Information
#
# Table name: feed_items
#
#  id            :integer          not null, primary key
#  feedable_id   :integer          not null
#  feedable_type :string           not null
#  user_id       :integer          not null
#  created_at    :datetime
#  updated_at    :datetime
#

class FeedItem < ActiveRecord::Base
  belongs_to :feedable, polymorphic: true
  validates :feedable, :user, presence: true
  belongs_to :user
  before_validation :ensure_user

  private

    def ensure_user
      case feedable_type
      when 'Route'
        self.user = feedable.creator
      when 'Run'
        self.user = feedable.runner
      end
    end
end
