# == Schema Information
#
# Table name: housings
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  host_id      :integer          not null
#  address      :string           not null
#  housing_type :string           not null
#  bedrooms     :integer          not null
#  beds         :integer          not null
#  baths        :integer          not null
#  guests       :integer          not null
#  price        :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  city         :string           not null
#  lat          :integer          not null
#  lng          :integer          not null
#
class Housing < ApplicationRecord
    validates :name, :host_id, :address, :housing_type, :bedrooms, :beds, :baths, :guests, :price, :city, :lat, :lng, presence: true
    validates :address, uniqueness: true
    validates :housing_type, inclusion: { in: ["Entire place", "Private room", "Shared room"] }

    has_one_attached :photo

    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User

    has_many :reviews,
        primary_key: :id,
        foreign_key: :housing_id,
        class_name: :Review

    has_many :bookings,
        primary_key: :id,
        foreign_key: :housing_id,
        class_name: :Booking

    def average_rating
        average = reviews.average(:rating)
        # average.round(2)
    end
end
