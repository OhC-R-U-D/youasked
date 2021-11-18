class AddAliasToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :alias, :string
  end
end
