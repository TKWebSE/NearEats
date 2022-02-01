# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_17_024851) do

  create_table "foods", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name", null: false
    t.integer "price", null: false
    t.text "description", null: false
    t.string "image"
    t.integer "count", null: false
    t.string "city", null: false
    t.boolean "deleted", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_foods_on_user_id"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "order_user_id", null: false
    t.integer "make_user_id", null: false
    t.integer "food_id", null: false
    t.integer "count", default: 1, null: false
    t.string "order_status", default: "0", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["food_id"], name: "index_orders_on_food_id"
    t.index ["make_user_id"], name: "index_orders_on_make_user_id"
    t.index ["order_user_id"], name: "index_orders_on_order_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "confirmation_password_sent_at"
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.string "confirmation_email_code"
    t.datetime "confirmation_email_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "city"
    t.string "address"
    t.string "image"
    t.string "email"
    t.integer "point"
    t.integer "valuation"
    t.string "stripe_customer_id"
    t.string "deleted", default: "f"
    t.text "tokens"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "foods", "users"
  add_foreign_key "orders", "foods"
  add_foreign_key "orders", "users", column: "make_user_id"
  add_foreign_key "orders", "users", column: "order_user_id"
end
