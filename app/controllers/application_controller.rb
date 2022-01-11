class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken

    skip_before_action :method_name, raise: false    
    skip_before_action :verify_authenticity_token, raise: false    
    before_action :configure_permitted_parameters, if: :devise_controller?

    helper_method :current_api_v1_user, :api_v1_user_signed_in?
    # before_action :http_header_log

    # def current_user
    #     @current_user ||= User.find(session[:user_id]) if session[:user_id]
    # end
    YOUR_DOMAIN = 'http://localhost:3000'

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:confirm_success_url])
    end

    # 認証コードを生成する
    def get_six_string_number
      number = rand(999999)
      return format("%06d", number)
    end

    # private

  #   def http_header_log
  #     request.headers.sort.map { |k, v| logger.info "#{k}:#{v}" }
  #   end
end
