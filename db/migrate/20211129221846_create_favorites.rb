class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.references :user
      t.integer :favorite_id
      t.string :favorite_type
      t.timestamps
    end
  end
end
