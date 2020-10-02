# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  birthdate       :date             not null
#
class User < ApplicationRecord
    validates :email, :birthdate, :first_name, :last_name, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}

    has_many :housings,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :Housing

    has_many :reviews,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Review

    after_initialize :ensure_session_token!

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        return nil if user.nil?

        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    private

    def ensure_session_token!
        self.session_token ||= SecureRandom.base64(64)
    end
end
