class DateIdea < ApplicationRecord
  belongs_to :user
  has_many :reviews, dependent: :destroy
end

# how to code price expectation validation
