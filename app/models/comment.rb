# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  author_id        :integer          not null
#  commentable_id   :integer          not null
#  commentable_type :string           not null
#  body             :text             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :author, :commentable, :body, presence: true

  belongs_to(
    :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User')

  belongs_to :commentable, polymorphic: true
end
