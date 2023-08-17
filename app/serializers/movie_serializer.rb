class MovieSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :genre, :year, :director, :image_file, :user_id
  belongs_to :user
  has_many :reviews

  def image_file
    rails_blob_path(object.image_file, only_path: true) if object.image_file.attached?
  end
end
