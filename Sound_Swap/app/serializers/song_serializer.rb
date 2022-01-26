class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :duration, :image
  has_one :playlist
  has_one :user
end
