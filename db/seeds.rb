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
@user1 = User.create!(username: "michelle", email: "test@gmail.com", age: 25, password: "abcdefgh")
@user2 = User.create!(username: "ryan", email: "ryan@gmail.com", age: 29, password: "abcdefgh")
@user3 = User.create!(username: "clarissa", email: "clarissa@gmail.com", age: 36, password: "abcdefgh")
@user4 = User.create!(username: "tom", email: "tom@gmail.com", age: 41, password: "abcdefgh")
@user5 = User.create!(username: "betsy", email: "betsy@gmail.com", age: 22, password: "abcdefgh")
puts "5 users created"

@date_idea1 = DateIdea.create!(title: "Governor's Island", price_exp: 1, city: "New York City", category: "Bike Trails", img_url: "https://www.blazingsaddles.com/sites/default/files/styles/header_slideshow/public/header-images/2019-06/Blazing%20Saddles%20by%20Jinnifer%20Douglass%20135%20%281%29.jpg?h=7d1b7995&itok=NKMSgmJU", user: @user1)
@date_idea2 = DateIdea.create!(title: "Pier 17", price_exp: 3, city: "New York City", category: "Rooftops", img_url: "https://nypost.com/wp-content/uploads/sites/2/2020/08/rooftops-pier-17-the-greens.jpg?quality=80&strip=all&w=1024", user: @user2)
@date_idea3 = DateIdea.create!(title: "Manhattan Kayak", price_exp: 3, city: "New York City", category: "Water Sports", img_url: "https://shipyardmarina.com/wp-content/uploads/2017/03/shipyard-marina-kayak-01.jpg", user: @user3)
@date_idea4 = DateIdea.create!(title: "Grand Banks", price_exp: 3, city: "New York City", category: "Boat Bars", img_url: "https://wswd-wordpress-production.s3.amazonaws.com/content/uploads/2018/07/15153625/GRAND-BANKS-NYC-FB-copy-1200x630.jpg", user: @user4)
@date_idea5 = DateIdea.create!(title: "Skyline Drive-In ", price_exp: 2, city: "Brooklyn", category: "Drive In", img_url: "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2020/06/10101747/82862589_260853392003955_6490946503075211457_n-1.jpg", user: @user5)
@date_idea6 = DateIdea.create!(title: "Pizza School NYC", price_exp: 2, city: "New York City", category: "Cooking Class", img_url: "https://media-cdn.tripadvisor.com/media/photo-s/11/e1/c5/08/photo1jpg.jpg", user: @user4)
@date_idea7 = DateIdea.create!(title: "Bronx Botanical Garden", price_exp: 2, city: "Bronx", category: "Picnic Spots", img_url: "https://hips.hearstapps.com/rbk.h-cdn.co/assets/16/37/2048x1365/gallery-1474056841-gettyimages-171789024.jpg", user: @user5)

  puts "7 ideas created"

@review = Review.create!(content: "My date and I explored the whole Island by Cycling, sitting at a Cafe sipping a Iced Passion Tea, and enjoyed seeing Jazz Age Dance Party. That was beautiful part of our trip.", user: @user1, date_idea: @date_idea1, username: "michelle")
# @review = Review.create!(content: "Brought a date here and had an amazing time. Rented a double seated bike which has a top covering which helps in the summer times.", user: @user5, date_idea: @date_idea1, username: "betsy")
  
@review = Review.create!(content: "What an amazing night at The Greens!! My wife and I spent our evening watching the sunset, drinking yummy yummy drinks (Pina Colada & The Greens cocktail), and eating good food.", user: @user2, date_idea: @date_idea2, username: "ryan")
# @review = Review.create!(content: "Such a great spot for socially distanced dating. You can enjoy lunch or dinner here (reserve a lawn in advance) and also play games or just enjoy the scenery.", user: @user4, date_idea: @date_idea2, username: "tom")
  
  
# @review = Review.create!(content: "Had the best first time here with my fiancee! Judy and Dale were the most welcoming and helpful people I have ever met! ", user: @user3, date_idea: @date_idea3, username: "clarissa")
@review = Review.create!(content: "Manhattan Kayak is a wonderful addition to the New York landscape.  It has been here for eight years.  I only just discovered it while out with my new BF.  Discoveries such as this, especially in these bleak times, are a total find.", user: @user3, date_idea: @date_idea3, username: "clarissa")
  
@review = Review.create!(content: "What a nice escape for a date night in Manhattan. Beautiful setting, great views, excellent oysters and the scallops and ceviche were amazing. Alex, our bartender, was so attentive and helpful. Definitely recommend. ", user: @user4, date_idea: @date_idea4, username: "tom")
# @review = Review.create!(content: "Oysters, soft shell crab and lobster roll Scenic, serene, scrumptious And lovely service too! This is a unique NYC spot!", user: @user1, date_idea: @date_idea4, username: "michelle")

@review = Review.create!(content: "This new guy I'm seeing suggested the Skyline Drive-in and we found it to be such a great and relatively safe activity during COVID times. I felt that the staff were working very hard to keep us safe and the evening running smoothly.", user: @user5, date_idea: @date_idea5, username: "betsy")
# @review = Review.create!(content: "Since we started going here a few weeks ago, we have really enjoyed ourselves. The staff are extremely friendly, the concessions are well done, and fairly priced.", user: @user3, date_idea: @date_idea5, username: "clarissa")
  
@review = Review.create!(content: "Had a date night at the Pizza School. It was so much fun and obviously also delicious. There were drinkers and non-drinkers, meat-eaters and vegetarians. The class was a blast for everyone. Such a great date idea in a way that isn’t typical dinner/drinks.", user: @user4, date_idea: @date_idea6, username: "tom")
# @review = Review.create!(content: "Great experience. My girlfriend and I absolutely loved it. The class is fun as well as educational and the instructors are amazing. Highly recommend this experience for a date night or family affair.", user: @user2, date_idea: @date_idea6, username: "ryan")
@review = Review.create!(content: "Absolutely a wonderful, tranquil, stress relieving experience. I enjoyed this so much. The grounds are breathtaking! So much beauty to take in. The smells, colors, trails and twists and turn really do teleport you. ", user: @user5, date_idea: @date_idea7, username: "betsy")

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

