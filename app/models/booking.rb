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
end
