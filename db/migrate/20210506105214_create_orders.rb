class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :order_user, null: false, foreign_key: true
      t.integer :make_user, null: false, foreign_key: true
      t.references :foods, null: false, foreign_key: true
      t.integer :count, null: false,default:1
      t.string :order_status,null: false,default:0

      t.timestamps
      
      add_index :oreders,[:order_user_id,:make_user_id]
    end
  end
end
