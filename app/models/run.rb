# == Schema Information
#
# Table name: runs
#
#  id          :integer          not null, primary key
#  runner_id   :integer          not null
#  route_id    :integer          not null
#  date        :date             not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  duration    :integer          not null
#  title       :string           not null
#

class Run < ActiveRecord::Base
  validates :runner_id, :route_id, :date, :duration, :title,
            :description, presence: true

  belongs_to(
    :runner,
    primary_key: :id,
    foreign_key: :runner_id,
    class_name: 'User')

  belongs_to(
    :route,
    primary_key: :id,
    foreign_key: :route_id,
    class_name: 'Route')

  after_create :create_feed_item

  private

    def create_feed_item
      FeedItem.create!(feedable: self)
    end
end
