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
require 'test_helper'

class HousingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
