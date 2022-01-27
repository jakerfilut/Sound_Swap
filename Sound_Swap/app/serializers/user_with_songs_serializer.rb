class UserWithSongsSerializer < ActiveModel::Serializer
attributes :id, :username
has_many :songs

end