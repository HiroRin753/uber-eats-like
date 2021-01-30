Rails.application.routes.draw do
  namespace :api do #namespaceで名前空間を付与することで、コントローラーをグルーピングし、またURLにもその情報を付与することを意味する
    namespace :v1 do #vはバージョンのことで、APIを更新する場合にスイッチングしやすくするためにつける。アプリの開発途中でAPIの仕様を大きく変更する場合に備えてURL自体にバージョン番号を持たせる。しかし、これは「必要な場合にのみ」つけることが推奨されている
      resources :restaurants do
        resources :foods, only: %i[index] #%i[index new create] = [:index, :new, :create], %iで要素がシンボルの配列を作る
      end
      resources :line_foods, only: %i[index create]
      put 'line_foods/replace',to: 'line_foods#replace' #put...to:について：「'line_foods/replace'というURLに対してPUTリクエストがきたら、line_foods_controller.rbのreplaceメソッドを呼ぶ」ということを意味する。
      resources :orders, only: %i[create]
    end
  end
end
