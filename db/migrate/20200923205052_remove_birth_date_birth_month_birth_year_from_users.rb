class RemoveBirthDateBirthMonthBirthYearFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :birth_date, :integer
    remove_column :users, :birth_month, :integer
    remove_column :users, :birth_year, :integer

    add_column :users, :birthdate, :date, null: false
  end
end
