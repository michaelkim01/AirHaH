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
class Review < ApplicationRecord
    validates :body, :author_id, :housing_id, :rating, presence: true
    validates :author_id, uniqueness: { scope: :housing_id}
    validates :rating, inclusion: { in: (1..5) }

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :housing,
        primary_key: :id,
        foreign_key: :housing_id,
        class_name: :Housing
end
