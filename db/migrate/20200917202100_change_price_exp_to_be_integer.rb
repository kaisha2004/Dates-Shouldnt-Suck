class ChangePriceExpToBeInteger < ActiveRecord::Migration[6.0]
  def change
    change_column :date_ideas, :price_exp, 'integer USING CAST(price_exp AS integer)'
  end
end
