class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :title, :duration, :image
  has_one :user
  has_many :song
end
