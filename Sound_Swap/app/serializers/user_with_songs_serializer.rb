class UserWithSongsSerializer < ActiveModel::Seriallizer
attributes :id, :username
has_many :songs

end