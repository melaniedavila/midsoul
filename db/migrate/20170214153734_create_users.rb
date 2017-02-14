class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :f_name, null: false
      t.string :l_name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :image_url
      t.timestamps null: false
    end
  end
end
