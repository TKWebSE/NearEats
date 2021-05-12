class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.references :order_user, null: false, foreign_key:  {to_table: :users }
      t.references :make_user, null: false, foreign_key: {to_table: :users }
      t.references :food, foreign_key: {to_table: :foods }
      t.integer :count, null: false,default:1
      t.string :order_status,null: false,default:0

      t.timestamps
    end
  end
end
