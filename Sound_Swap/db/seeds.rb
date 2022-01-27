# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

puts "🍕 Seeding data..."


2.times do
  Song.create!(
    title: Faker::Book.title,
    artist: Faker::Music.band,
    duration: Faker::Number.decimal(l_digits: 2),
    image: Faker::Avatar.image,
  )
end

Playlist.create!(
  title: "test",
  duration: "test",
  image: "test",
  user_id: 3,
  song_id: rand(225..228),
)



  puts "🍕 Done seeding!"