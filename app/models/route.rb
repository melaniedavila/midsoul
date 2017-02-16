# == Schema Information
#
# Table name: routes
#
#  id             :integer          not null, primary key
#  creator_id     :integer          not null
#  title          :string           not null
#  description    :text             not null
#  path           :geometry({:srid= not null, linestring, 0
#  image_url      :string           not null
#  distance       :float            not null
#  elevation_gain :float            not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Route < ActiveRecord::Base
  validates :creator_id, :title, :description, :path, :image_url, :distance,
            :elevation_gain, presence: true


  belongs_to(
    :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: 'User')
  # calculate distance and elevation_gain before save
  # generate image url before save

end
