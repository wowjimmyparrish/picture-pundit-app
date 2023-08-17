class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :movie_id, :user_id
  belongs_to :movie
  belongs_to :user
end
