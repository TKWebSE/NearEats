class Api::V1::Auth::SessionsController < ApplicationController
  # before_action :authenticate_api_v1_user!

  def create 
    logger.debug("んなぁああああああい")
    logger.debug(params)
  end
  def index
    logger.debug("こめんとだよ～＝＝＝＝")
    logger.debug(current_api_v1_user ==nil)
    logger.debug(current_api_v1_user)
    logger.debug("あ、あ、こめんとだよ～＝＝＝＝")
    logger.debug(api_v1_user_signed_in?)
    logger.debug("ぺこぺこぺこぺこ")
    if current_api_v1_user
      render json: { is_login: true, user: current_api_v1_user }
    else
      render json: { is_login: false, user: current_api_v1_user }
    end
  end

  def show
    if current_user
      render json: { is_login: true, data: current_user }
    else
      render json: { is_login: false, message: "ユーザーが存在しません" }
    end
  end

end
