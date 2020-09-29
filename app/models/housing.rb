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
#
class Housing < ApplicationRecord
    validates :name, :host_id, :address, :housing_type, :bedrooms, :beds, :baths, :guests, :price, presence: true
    validates :address, uniqueness: true, 
    # validates :host_id, inclusion: { in: ["Entire place", "Private room", "Shared room"] }

    has_one_attached :photo

end
