# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'


puts "🍕 Seeding data..."

 100.times do
    Song.create(
      title: Faker::Book.title,
      artist: Faker::Music.band,
      duration: Faker::Number.decimal(l_digits: 2),
      image: Faker::Avatar.image,
      user_id: 1
    )
  end

  Song.create(
    title: "bob",
    artist: "bob",
    duration: "bob",
    image: "bob",
    user_id: 1
  )

  puts "🍕 Done seeding!"