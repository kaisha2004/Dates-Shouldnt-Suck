class CreateDateIdeas < ActiveRecord::Migration[6.0]
  def change
    create_table :date_ideas do |t|
      t.string :title
      t.string :price_exp
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
