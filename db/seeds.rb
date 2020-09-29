# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Housing.destroy_all

require 'open-uri'

demo_user = User.create(first_name: "Andy", last_name: "Smith", email: "andy@email.com", password: "password", birthdate: DateTime.parse("3 March 1993"))

demo_housing1 = Housing.create(:name => "Beachfront Condo", :host_id => 1, :address => "1 first street, city one, CA 12345", :housing_type => "Entire place", :bedrooms => 2, :baths => 2, :beds => 2, :guests => 4, :price => 500)
demo_housing2 = Housing.create(:name => "Beachfront Room", :host_id => 2, :address => "2 second street, city one, CA 12345", :housing_type => "Private room", :bedrooms => 1, :baths => 1, :beds => 1, :guests => 2, :price => 50)
demo_housing3 = Housing.create(:name => "Beachfront Roommates", :host_id => 2, :address => "3 third street, city one, CA 12345", :housing_type => "Shared room", :bedrooms => 1, :baths => 1, :beds => 2, :guests => 2, :price => 30)

demo_housing1.photo.attach(io: URI.open('https://airhah-seeds.s3.us-east-2.amazonaws.com/housing1.jpg'), filename: 'housing1.jpg')
demo_housing2.photo.attach(io: URI.open('https://airhah-seeds.s3.us-east-2.amazonaws.com/housing2.jpg'), filename: 'housing2.jpg')