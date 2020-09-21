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
@user1 = User.create!(username: "test", email: "test@gmail.com", age: 25, password: "abcdefgh")
@user2 = User.create!(username: "ryan", email: "ryan@gmail.com", age: 29, password: "abcdefgh")
@user3 = User.create!(username: "clarissa", email: "clarissa@gmail.com", age: 36, password: "abcdefgh")
@user4 = User.create!(username: "tom", email: "tom@gmail.com", age: 41, password: "abcdefgh")
@user5 = User.create!(username: "betsy", email: "betsy@gmail.com", age: 22, password: "abcdefgh")
puts "5 users created"

@date_idea1 = DateIdea.create!(title: "Governor's Island", price_exp: 1, city: "New York City", category: "bike trails", img_url: "https://www.blazingsaddles.com/sites/default/files/styles/header_slideshow/public/header-images/2019-06/Blazing%20Saddles%20by%20Jinnifer%20Douglass%20135%20%281%29.jpg?h=7d1b7995&itok=NKMSgmJU", user: @user1)
@date_idea2 = DateIdea.create!(title: "Central Park", price_exp: 1, city: "New York City", category: "bike trails", img_url: "https://img.grouponcdn.com/deal/3YNKdh87oEnvzHjHHwHviGLqyytd/3Y-2100x1400/v1/c700x420.jpg", user: @user2)
@date_idea3 = DateIdea.create!(title: "East River", price_exp: 1, city: "New York City", category: "bike trails", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL4xCDKX17kzc_VHqGhOpsjH-9-RQVHpNVFg&usqp=CAU", user: @user3)
@date_idea4 = DateIdea.create!(title: "Abigail's Kitchen", price_exp: 3, city: "New York City", category: "cooking class", img_url: "https://images.squarespace-cdn.com/content/v1/5ca5fcc552395850e88992c6/1555366456533-SETH3DBNII0L9ZKMEU0E/ke17ZwdGBToddI8pDm48kPWm0rAlW9TKAL1D5ahVyMVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIMtibWLUI7aOimFHAlN5ME1NTm-o9_jdK7gwBeKeV1OAKMshLAGzx4R3EDFOm1kBS/ABIGAILS+KITCHEN_SPRING+2019_114_WEB.jpg", user: @user2)
@date_idea5 = DateIdea.create!(title: "ButterLane Cupcakes", price_exp: 3, city: "New York City", category: "cooking class", img_url: "https://d3tv8y14ogpztx.cloudfront.net/pulses/images/000/031/845/wide_product/butter_lane-cupcake_girls.jpg", user: @user4)
@date_idea6 = DateIdea.create!(title: "Pizza School NYC", price_exp: 2, city: "New York City", category: "cooking class", img_url: "https://media-cdn.tripadvisor.com/media/photo-s/11/e1/c5/08/photo1jpg.jpg", user: @user5)

  puts "6 ideas created"

@review = Review.create!(content: "Had a date night at the Pizza School. It was so much fun and obviously also delicious. There were drinkers and non-drinkers, meat-eaters and vegetarians. The class was a blast for everyone. Such a great date idea to catch up with friends in a way that isn’t typical dinner/drinks.", user: @user3, date_idea: @date_idea6)
@review = Review.create!(content: "Great experience. My girlfriend and I absolutely loved it. The class is fun as well as educational and the instructors are amazing. Highly recommend this experience for a date night or family affair.", user: @user1, date_idea: @date_idea6)

# 15.times do
#   User.create!(username: Faker::Internet.username, email: Faker::Internet.email, age: Faker::Number.within(range: 18..50), password: Faker::Internet.password(min_length: 6))
# end

# @date_idea = DateIdea.new(title: Faker::Restaurant.name, price_exp: Faker::Number.within(range: 1..3), city: Faker::Address.city, user: @user)

# 100.times do
#   @user = User.all.sample 
#   DateIdea.create!(title: Faker::Restaurant.name, price_exp: Faker::Number.within(range: 1..3), city: Faker::Address.city, user: @user)
# end



# 300.times do
#   @user = User.all.sample
#   @date_idea = DateIdea.all.sample 
#   Review.create!(content: Faker::Restaurant.review, user: @user, date_idea: @date_idea)
# end

