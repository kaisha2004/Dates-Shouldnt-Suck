require "faker"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.destroy_all
DateIdea.destroy_all
User.destroy_all
@user = User.new(username: "test", email: "test@gmail.com", age: 25, password: "abcdefgh")
if @user.save
  puts "1 user created"
end

15.times do
  User.create!(username: Faker::Internet.username, email: Faker::Internet.email, age: Faker::Number.within(range: 18..50), password: Faker::Internet.password(min_length: 6))
end

@date_idea = DateIdea.new(title: Faker::Restaurant.name, user: @user)

100.times do
  @user = User.all.sample 
  DateIdea.create!(title: Faker::Restaurant.name, user: @user)
end

@review = Review.new(content: Faker::Restaurant.review, user: @user, date_idea: @date_idea)

300.times do
  @user = User.all.sample
  @date_idea = DateIdea.all.sample 
  Review.create!(content: Faker::Restaurant.review, user: @user, date_idea: @date_idea)
end