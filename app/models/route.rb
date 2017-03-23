# == Schema Information
#
# Table name: routes
#
#  id             :integer          not null, primary key
#  creator_id     :integer          not null
#  title          :string           not null
#  description    :text             not null
#  distance       :float            not null
#  elevation_gain :float            not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  polyline       :text             not null
#

class Route < ActiveRecord::Base
  validates :creator_id, :title, :description, :distance,
            :elevation_gain, presence: true

  validates :polyline,
            presence: { message: "Please create a path on the map" }

  belongs_to(
    :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: 'User')

  has_many(
    :runs,
    primary_key: :id,
    foreign_key: :route_id,
    class_name: 'Run'
  )

  has_many(
    :comments,
    as: :commentable,
    dependent: :destroy
  )

  has_many(
    :feed_items,
    as: :feedable,
    dependent: :destroy
  )

  after_create :create_feed_item

  private

    def create_feed_item
      FeedItem.create!(feedable: self)
    end
end
