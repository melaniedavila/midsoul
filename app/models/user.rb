# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  f_name          :string           not null
#  l_name          :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  image_url       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :email, :f_name, :l_name, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  # validates :email, email_format: { message: 'Invalid email address' }
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  attr_reader :password

  has_many(
    :routes,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: 'Route'
  )

  has_many(
    :runs,
    primary_key: :id,
    foreign_key: :runner_id,
    class_name: 'Run'
  )

  has_attached_file :profile_picture, styles: {
    big: "600x600>",
    small: "50x50#"
  }
  validates_attachment_content_type(
    :profile_picture,
    content_type: /\Aimage\/.*\Z/
  )

  def self.find_by_credentials(params)
    user = User.find_by(email: params[:email])
    return user if user && user.is_password?(params[:password])
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
