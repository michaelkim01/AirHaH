# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_01_213857) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "bookings", force: :cascade do |t|
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.integer "housing_id", null: false
    t.integer "guest_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["housing_id", "end_date"], name: "index_bookings_on_housing_id_and_end_date", unique: true
    t.index ["housing_id", "start_date"], name: "index_bookings_on_housing_id_and_start_date", unique: true
  end

  create_table "housings", force: :cascade do |t|
    t.string "name", null: false
    t.integer "host_id", null: false
    t.string "address", null: false
    t.string "housing_type", null: false
    t.integer "bedrooms", null: false
    t.integer "beds", null: false
    t.integer "baths", null: false
    t.integer "guests", null: false
    t.integer "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "city", null: false
    t.integer "lat", null: false
    t.integer "lng", null: false
    t.index ["address"], name: "index_housings_on_address", unique: true
    t.index ["baths", "guests", "price"], name: "index_housings_on_baths_and_guests_and_price"
    t.index ["bedrooms", "beds"], name: "index_housings_on_bedrooms_and_beds"
    t.index ["host_id", "housing_type"], name: "index_housings_on_host_id_and_housing_type"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "body", null: false
    t.integer "author_id", null: false
    t.integer "housing_id", null: false
    t.integer "rating", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id", "housing_id"], name: "index_reviews_on_author_id_and_housing_id", unique: true
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["housing_id"], name: "index_reviews_on_housing_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "birthdate", null: false
    t.index ["email", "session_token"], name: "index_users_on_email_and_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
