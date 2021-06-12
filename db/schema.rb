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

ActiveRecord::Schema.define(version: 2021_05_06_105214) do

  create_table "foods", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name", null: false
    t.integer "price", null: false
    t.text "description", null: false
    t.string "image"
    t.integer "count", null: false
    t.string "station", null: false
    t.boolean "deleted", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_foods_on_user_id"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "order_user_id", null: false
    t.integer "make_user_id", null: false
    t.integer "food_id"
    t.integer "count", default: 1, null: false
    t.string "order_status", default: "0", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["food_id"], name: "index_orders_on_food_id"
    t.index ["make_user_id"], name: "index_orders_on_make_user_id"
    t.index ["order_user_id"], name: "index_orders_on_order_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.text "address"
    t.integer "point", default: 0, null: false
    t.integer "time_required", null: false
    t.boolean "deleted", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "foods", "users"
  add_foreign_key "orders", "foods"
  add_foreign_key "orders", "users", column: "make_user_id"
  add_foreign_key "orders", "users", column: "order_user_id"
end
