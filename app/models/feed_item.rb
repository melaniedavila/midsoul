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
#  sortby_date   :date             not null
#

class FeedItem < ActiveRecord::Base
  belongs_to :feedable, polymorphic: true
  validates :feedable, :user, :sortby_date, presence: true
  belongs_to :user
  before_validation :ensure_user_and_sortby_date

  private

    def ensure_user_and_sortby_date
      case feedable_type
      when 'Route'
        self.user = feedable.creator
        self.sortby_date = feedable.created_at.to_date
      when 'Run'
        self.user = feedable.runner
        self.sortby_date = feedable.date
      end
    end
end
