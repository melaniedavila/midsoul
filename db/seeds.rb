# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(
  f_name: 'test1',
  l_name: 'test1',
  email: 'test1@example.com',
  password: 'password'
)

User.create!(
  f_name: 'test2',
  l_name: 'test2',
  email: 'test2@example.com',
  password: 'password'
)
