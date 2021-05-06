class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email,null:false
      t.string :password,null:false
      t.integer :point, null: false, default: 0
      t.integer :time_required, null: false

      t.boolean :deleted,default:false
      t.timestamps
    end
  end
end
