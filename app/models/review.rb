class Review < ApplicationRecord
    belongs_to :movie
    belongs_to :user

    validates :review, presence: true
    
end
