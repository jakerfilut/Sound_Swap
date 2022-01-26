class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :title, :duration, :image
end
