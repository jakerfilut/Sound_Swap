class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :duration, :image
end
