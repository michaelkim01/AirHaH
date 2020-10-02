# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  housing_id :integer          not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
