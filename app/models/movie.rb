class Movie < ApplicationRecord
    has_one_attached :image_file
    belongs_to :user
    has_many :reviews, dependent: :destroy
    

    validates :name, presence: true, uniqueness: { case_sensitive: false }
    validates :genre, presence: true
    validates :year, presence: true
    validates :director, presence: true
    # validates :image_file, presence: true
    
end
