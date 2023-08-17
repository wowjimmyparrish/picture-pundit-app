class User < ApplicationRecord

    has_many :reviews, dependent: :destroy
    has_many :movies, through: :reviews
    has_many :created_movies, class_name: "Movie"

    has_secure_password 

    validates :username, presence: true, uniqueness: true, length: { in: 5..20 }
    validates :password, presence: true, length: { in: 6..15 }, confirmation: :true
end
