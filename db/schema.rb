# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20170323155321) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id",        null: false
    t.integer  "commentable_id",   null: false
    t.string   "commentable_type", null: false
    t.text     "body",             null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "comments", ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id", using: :btree

  create_table "feed_items", force: :cascade do |t|
    t.integer  "feedable_id",   null: false
    t.string   "feedable_type", null: false
    t.integer  "user_id",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.date     "sortby_date",   null: false
  end

  add_index "feed_items", ["feedable_type", "feedable_id"], name: "index_feed_items_on_feedable_type_and_feedable_id", using: :btree
  add_index "feed_items", ["user_id"], name: "index_feed_items_on_user_id", using: :btree

  create_table "friend_requests", force: :cascade do |t|
    t.integer  "requestor_id",             null: false
    t.integer  "requestee_id",             null: false
    t.integer  "status",       default: 0, null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_index "friend_requests", ["requestor_id", "requestee_id"], name: "index_friend_requests_on_requestor_id_and_requestee_id", unique: true, using: :btree

  create_table "friendships", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "friend_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "friendships", ["user_id", "friend_id"], name: "index_friendships_on_user_id_and_friend_id", unique: true, using: :btree

  create_table "routes", force: :cascade do |t|
    t.integer  "creator_id",     null: false
    t.string   "title",          null: false
    t.text     "description",    null: false
    t.float    "distance",       null: false
    t.float    "elevation_gain", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.text     "polyline",       null: false
  end

  create_table "runs", force: :cascade do |t|
    t.integer  "runner_id",   null: false
    t.integer  "route_id",    null: false
    t.date     "date",        null: false
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "duration",    null: false
    t.string   "title",       null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                        null: false
    t.string   "f_name",                       null: false
    t.string   "l_name",                       null: false
    t.string   "password_digest",              null: false
    t.string   "session_token",                null: false
    t.string   "image_url"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.string   "profile_picture_file_name"
    t.string   "profile_picture_content_type"
    t.integer  "profile_picture_file_size"
    t.datetime "profile_picture_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["f_name"], name: "index_users_on_f_name", using: :btree
  add_index "users", ["l_name"], name: "index_users_on_l_name", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
