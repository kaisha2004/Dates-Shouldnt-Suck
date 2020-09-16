class Review < ApplicationRecord
  belongs_to :user
  belongs_to :date_idea
end
