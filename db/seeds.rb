# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Housing.destroy_all
Review.destroy_all

require 'open-uri'

demo_user = User.create(first_name: "Andy", last_name: "Smith", email: "andy@email.com", password: "password", birthdate: DateTime.parse("3 March 1993"))

guest_user1 = User.create(first_name: "Candice", last_name: "Everdine", email: "candice@email.com", password: "password", birthdate: DateTime.parse("1 January 1991"))
guest_user2 = User.create(first_name: "James", last_name: "Lee", email: "james@email.com", password: "password", birthdate: DateTime.parse("4 April 1994"))
host_user = User.create(first_name: "Bob", last_name: "Omb", email: "bob@email.com", password: "password", birthdate: DateTime.parse("2 February 1992"))

demo_housing1 = Housing.create(:name => "Beachfront Condo", :host_id => host_user.id, :address => "1 first street, New York, CA 12345 United States", :housing_type => "Entire place", :bedrooms => 2, :baths => 2, :beds => 2, :guests => 4, :price => 500, :city => "New York", :lat => 40.7125419, :lng => -74.047511)
demo_housing2 = Housing.create(:name => "Beachfront Room", :host_id => host_user.id, :address => "2 second street, New York, CA 12345 United States", :housing_type => "Private room", :bedrooms => 1, :baths => 1, :beds => 1, :guests => 2, :price => 50, :city => "New York", :lat => 40.8125419, :lng => -74.047511)
demo_housing3 = Housing.create(:name => "Beachfront Roommates", :host_id => host_user.id, :address => "3 third street, New York, CA 12345 United States", :housing_type => "Shared room", :bedrooms => 1, :baths => 1, :beds => 2, :guests => 2, :price => 30, :city => "New York", :lat => 40.7125419, :lng => -74.147511)

demo_housing1.photo.attach(io: URI.open('https://airhah-seeds.s3.us-east-2.amazonaws.com/housing1.jpg'), filename: 'housing1.jpg')
demo_housing2.photo.attach(io: URI.open('https://airhah-seeds.s3.us-east-2.amazonaws.com/housing2.jpg'), filename: 'housing2.jpg')
demo_housing3.photo.attach(io: URI.open('https://airhah-seeds.s3.us-east-2.amazonaws.com/housing3.jpg'), filename: 'housing3.jpg')

demo_review1 = Review.create(:body => "Great stay!", :author_id => guest_user1.id, :housing_id => demo_housing1.id, :rating => 5)
demo_review4 = Review.create(:body => "Superb!", :author_id => guest_user2.id, :housing_id => demo_housing1.id, :rating => 5)
demo_review2 = Review.create(:body => "meh", :author_id => guest_user1.id, :housing_id => demo_housing2.id, :rating => 3)
demo_review3 = Review.create(:body => "omg...", :author_id => guest_user1.id, :housing_id => demo_housing3.id, :rating => 1)
