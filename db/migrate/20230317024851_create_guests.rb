class CreateGuests < ActiveRecord::Migration[6.0]
  def change
    create_table :guests do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :auth_code,null:false

      t.datetime :confirmation_email_sent_at

      t.boolean :deleted,default:false
      t.timestamps
    end
  end
end
