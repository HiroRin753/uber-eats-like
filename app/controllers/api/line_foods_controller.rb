module Api
  module V1
    class LineFoodsController < ApplicationController
      before_action :set_food, only: %i[create]

      def create
        if LineFood.active.other_restaurant(@ordered_food.restaurant.id).exits? #複数のscope(active、other_restaurant)を組み合わせて、「他店舗でアクティブなLineFood」をActiveRecord_Relationのかたちで取得
        return render json: { #JSON形式のデータの中身にはexisting_restaurantですでに作成されている他店舗の情報と、new_restaurantでこのリクエストで作成しようとした新店舗の情報の２つを返す
          exiting_restaurant: LineFood.other_restaurant(@ordered_food.restaurant.id).first.restaurant.name,
          new_restaurant: Food.find(params[:food_id]).restaurant.name,
        },status: :not_acceptable #HTTPレスポンスステータスコードは406 Not Acceptableを返す
        end

        set_line_food(@ordered_food)

        if@line_food.save
          render json: {
            line_food:@line_food
          },status: :created 
        else
          render json:{},status: :internal_server_error #もしフロントエンドでエラーの内容に応じて表示を変えるような場合にここでHTTPレスポンスステータスコードが500系になることをチェックできる
        end
      end

      private

      def set_food
        @ordered_food = Food.find(params[:food_id])
      end

      #例外パターンに当てはまらず、正常に仮注文を作成する場合にはset_line_food(@ordered_food)でline_foodインスタンスを生成する。ただ、ここでも２つのパターンがある。１つは新しくline_foodを生成する場合。もう１つはすでに同じfoodに関するline_foodが存在する場合。この判断をordered_food.line_food.present?で行う。
      # ordered_food.line_food.present?がtrueの場合は、@line_food.attributes = {...で既存のline_foodインスタンスの既存の情報を更新。ここでは、countとactiveの２つを更新。
      # 一方で、全く新しくline_foodを作成する場合はordered_food.build_line_food(...でインスタンスを新規作成する。
      #↓
      def set_line_food(ordered_food)
        if ordered_food.line_food.present?
          @line_food = ordered_food.line_food
          @line_food.attributes = {
            count: ordered_food.line_food.count + params[:count],
            active: true
          }
        else
          @line_food = ordered_food.build_line_food(
            count:params[:count],
            restaurant:ordered_food.restaurant,
            active: true
          )
        end
      end
    end
  end
end
