class Api::V1::Auth::SessionsController < ApplicationController

  def index
    if current_api_v1_user
      render json: { is_login: true, data: current_api_v1_user }
    else
      render json: { is_login: false, message: "ユーザーが存在しません" }
    end
  end
  private
      def session_params
        params.require(:user).permit(:name, :email, :password)
      end 

      def configure_permitted_parameters
        devise_parameter_sanitizer.require(:session).permit(:sign_in, keys: [:session])
  end
end
