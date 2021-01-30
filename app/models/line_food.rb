class LineFood < ApplicatoinRecord
  belongs_to :LineFood
  belongs_to :restaurant
  belongs_to :order, optional:true

  validates :count, numericality:{greater_than:0}

  scope :active, -> {where(active:true)} #全てのLineFoodからwhereでactive: trueなもの一覧をActiveRecord_Relationのかたちで返す
  scope :order_restaurant, ->(picked_restaurant_id) { where.not(restaurant_id: picked_restaurant_id) } #restaurant_idが特定の店舗IDではないもの一覧を返す

  def total_amount #コントローラーではなく、モデルに記述することで様々な箇所から呼び出すことができる
    food.price * count
  end
end
