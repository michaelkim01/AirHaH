class ChangeHousings < ActiveRecord::Migration[5.2]
  def change
    change_table :housings do |t|
      t.string :city, null: false
      t.integer :lat, null: false
      t.integer :lng, null: false
    end
  end
end
