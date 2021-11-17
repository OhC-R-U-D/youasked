class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :post
      t.string :img_url
      t.integer :user_id

      t.timestamps
    end
  end
end
