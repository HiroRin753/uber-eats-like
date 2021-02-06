class ApplicationController < ActionController::API
  before_action :fake_load

  def fake_load
    sleep(1) #1秒だけプログラムの処理を止める ローカル環境ではロードが一瞬なため、ローディングを擬似的に再現する
  end
end
