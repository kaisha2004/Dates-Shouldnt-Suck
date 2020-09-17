class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :age, presence: true
  validates :password, length: { minimum: 6 }

  has_many :date_ideas
  has_many :reviews
end
