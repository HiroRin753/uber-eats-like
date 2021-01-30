3.times do |n|
  restaurant = Restaurant.new(
    name: "testレストラン_#{n}",
    fee: 100,
    time_required: 10,
  )

  12.times do |m|
    restaurant.foods.build(
      name: "フード名_#{m}",
      price: 500,
      description: "フード_#{m}の説明文です。"
    )
  end

  restaurant.save! #破壊的メソッド「！」を使うことで・エラーが発生した箇所がわかりやすい・例外が起きた場所で処理を止められる
end