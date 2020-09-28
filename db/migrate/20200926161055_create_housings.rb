class CreateHousings < ActiveRecord::Migration[5.2]
  def change
    create_table :housings do |t|
      t.string :name, null: false
      t.integer :host_id, null: false
      t.string :address, null: false
      t.string :housing_type, null: false
      t.integer :bedrooms, null: false
      t.integer :beds, null: false
      t.integer :baths, null: false
      t.integer :guests, null: false
      t.integer :price, null: false

      t.timestamps
    end
    add_index :housings, [:host_id, :housing_type]
    add_index :housings, [:bedrooms, :beds]
    add_index :housings, [:baths, :guests, :price]
    add_index :housings, :address, unique: true
  end
end
