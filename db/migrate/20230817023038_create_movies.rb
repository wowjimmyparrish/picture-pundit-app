class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :genre
      t.integer :year
      t.string :director
      t.integer :user_id
      t.timestamps
    end
  end
end
