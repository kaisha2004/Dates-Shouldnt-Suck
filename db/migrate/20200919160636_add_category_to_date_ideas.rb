class AddCategoryToDateIdeas < ActiveRecord::Migration[6.0]
  def change
    add_column :date_ideas, :category, :string
  end
end
