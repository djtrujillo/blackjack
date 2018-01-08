class User < ApplicationRecord
  has_secure_password

  before_save :default_chip_count

  def self.from_omniauth(auth)
   where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
     user.provider = auth.provider
     user.uid = auth.uid
     user.first_name = auth.info.first_name
     user.last_name = auth.info.last_name
     user.email = auth.info.email
     user.password = 'password'
     user.oauth_token = auth.credentials.token
     user.oauth_expires_at = Time.at(auth.credentials.expires_at)
     user.save!
   end
  end

  def default_chip_count
    self.chips ||= 0
  end
end
