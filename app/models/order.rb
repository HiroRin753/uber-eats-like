class Order < ApplicationRecord
  has_many :line_foods
  has_one :restaurant, through: :line_food

  validates :total_price, numericality: { greater_than: 0 }

  def save_with_update_line_foods!(line_foods)   #save_with_update_line_foods!でlinefoodデータの更新と、orderデータの保存を処理している
    ActiveRecord::Base.transaction do            #これらの処理をトランザクションの中で行うようにすることで、この２つの処理のいずれかが失敗した場合に全ての処理をなかったことにするように配慮している。
      line_foods.each do |line_food|
        line_food.update_attributes!(active: false, order: self)
      end
      self.save!
    end
  end
end