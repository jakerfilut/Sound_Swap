class User < ApplicationRecord
  has_many :songs
  has_many :playlists, through: :songs
  
  has_secure_password

  validates :username, presence: true, uniqueness: true
end
