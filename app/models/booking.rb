# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  start_date :date             not null
#  end_date   :date             not null
#  housing_id :integer          not null
#  guest_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Booking < ApplicationRecord
    validates :start_date, :end_date, :housing_id, :guest_id, presence: true
    validates :housing_id, uniqueness: { scope: :start_date}
    validates :housing_id, uniqueness: { scope: :end_date}

    belongs_to :guest,
        primary_key: :id,
        foreign_key: :guest_id,
        class_name: :User

    belongs_to :housing,
        primary_key: :id,
        foreign_key: :housing_id,
        class_name: :Housing
end
