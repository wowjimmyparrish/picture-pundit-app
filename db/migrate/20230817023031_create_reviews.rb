class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :review
      t.integer :movie_id
      t.integer :user_id

      t.timestamps
    end
  end
end
