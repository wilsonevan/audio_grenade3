class AddCartToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :cart, :text, default: [], array: true
  end
end
