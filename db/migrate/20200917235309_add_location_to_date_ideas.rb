class AddLocationToDateIdeas < ActiveRecord::Migration[6.0]
  def change
    add_column :date_ideas, :city, :string
  end
end
