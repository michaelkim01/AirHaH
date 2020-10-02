class ChangeHousings2 < ActiveRecord::Migration[5.2]
  def change
    change_column :housings, :lat, :decimal, precision: 15, scale: 10
    change_column :housings, :lng, :decimal, precision: 15, scale: 10
  end
end
