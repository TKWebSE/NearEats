class CreateFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :foods do |t|
      t.references :restaurant, null: false, foreign_key: true
      t.string :name, null: false
      t.integer :price, null: false
      t.text :description, null: false
      t.string :image
      t.integer :count,null:false

      t.boolean :deleted,default:false
      t.timestamps
    end
  end
end
