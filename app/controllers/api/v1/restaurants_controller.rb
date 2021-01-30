module Api #module Apiとすることで、名前空間を指定
  module V1
    class RestaurantsController < ApplicationController  #継承先＜継承元
      def index
        restaurants = Restaurant.all

        render json:{  #JSON形式でデータを返却
          restaurants: restaurants
        }, status: :ok #status: :okとすることで、リクエストが成功したこと、200 OKと一緒にデータを返すようになる
      end
    end
  end
end