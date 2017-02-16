# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
User.create!(
  f_name: 'test1',
  l_name: 'test1',
  email: 'test1@example.com',
  password: 'password',
  image_url: '../app/assets/images/profile_pic/default_prof_pic.png'
)

User.create!(
  f_name: 'test2',
  l_name: 'test2',
  email: 'test2@example.com',
  password: 'password',
  image_url: '../app/assets/images/profile_pic/default_prof_pic.png'
)

# For Guest Log In:
User.create!(
  f_name: 'Scott',
  l_name: 'Jurek',
  email: 'scott-jurek@example.com',
  password: 'password',
  image_url: '../app/assets/images/profile_pic/default_prof_pic.png'
  # image_url: 'http://vegan-magazine.com/wp-content/uploads/2012/06/Scott-Jurek-running.jpg'
)

Route.destroy_all
Route.create!(
  creator_id: 1,
  title: 'Title1',
  description: 'Description 1',
  path: 'linestring1',
  image_url:'url',
  distance: 1,
  elevation_gain: 1
)

Route.create!(
  creator_id: 2,
  title: 'Title2',
  description: 'Description2',
  path: 'linestring2',
  image_url:'url',
  distance: 2,
  elevation_gain: 2
)

Route.create!(
  creator_id: 3,
  title: 'Title3',
  description: 'Description3',
  path: 'linestring3',
  image_url:'url',
  distance: 3,
  elevation_gain: 3
)
