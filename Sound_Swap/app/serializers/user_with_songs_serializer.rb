<<<<<<< HEAD
class UserWithSongsSerializer < ActiveModel::Serializer
=======
class UserWithSongsSerializer < ActiveModel::Seriallizer
>>>>>>> main
attributes :id, :username
has_many :songs

end