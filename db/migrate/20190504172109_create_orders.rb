class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.date :order_date
      t.date :ship_date
      t.text :products_list, default: [], array: true
      t.text :shipping_address
      t.float :order_price
      t.integer :order_number
      t.string :order_status
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
