class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :food_maker_id
      t.interger,food_id
      t.integer,food_order_id
      t.integer,count
      t.string,order_status,default:0

      t.timestamps
    end
  end
end
