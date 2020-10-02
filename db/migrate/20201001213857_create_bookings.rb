class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :housing_id, null: false
      t.integer :guest_id, null: false
      t.timestamps
    end
    add_index :bookings, [:housing_id, :start_date], unique: true
    add_index :bookings, [:housing_id, :end_date], unique: true
  end
end
