class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :title, :duration, :image :song
  has_one :user
  has_many :song
end
