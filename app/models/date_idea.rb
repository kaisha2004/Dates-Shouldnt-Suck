class DateIdea < ApplicationRecord
  belongs_to :user
  has_many :reviews
end

# how to code price expectation validation
