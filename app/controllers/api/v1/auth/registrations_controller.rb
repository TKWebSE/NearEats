class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController

        private
        def sign_up_params
          params.require(:registration).permit(:registration,:name,:email, :img, :password, :password_confirmation,:addressm,:session)
        end 

        def account_update_params
          params.require(:registration).permit(:name, :registration, :email, :img,:password,:password_confirmation,:session)
        end
end
