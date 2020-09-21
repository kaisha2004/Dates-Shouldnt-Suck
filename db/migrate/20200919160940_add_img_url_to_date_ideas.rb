class AddImgUrlToDateIdeas < ActiveRecord::Migration[6.0]
  def change
    add_column :date_ideas, :img_url, :string
  end
end
