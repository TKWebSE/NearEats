class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
    # module Api
        # module V1
        #   module Auth

        def update 
          logger.debug("こめんとだよ～＝＝＝＝")
          logger.debug(params)
          super
        end
              private
              def sign_up_params
                params.require(:registration).permit(:registration,:name,:email, :img, :password, :password_confirmation,:addressm,:session)
              end 
      
              def account_update_params
                params.require(:registration).permit(:name, :registration, :email, :img,:password,:session)
              end
            # end
        #   end
        # end
end
