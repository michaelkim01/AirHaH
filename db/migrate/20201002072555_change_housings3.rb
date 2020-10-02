class ChangeHousings3 < ActiveRecord::Migration[5.2]
  def change
    change_column :housings, :lat, :decimal, precision: 10, scale: 6
    change_column :housings, :lng, :decimal, precision: 10, scale: 6
  end
end
