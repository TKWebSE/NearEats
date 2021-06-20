class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
    # module Api
        # module V1
        #   module Auth
            def sign_up
              logger.debug("コメント")
            end

            def new  
                logger.debug("nmmmnbnnnn")
                render json: {
                        name:"nameeeeeeeneko"
                    },status: :ok
            end
              private
              def sign_up_params
                params.require(:registration).permit(:name,:email, :img, :password, :password_confirmation,:address)
              end
      
              def account_update_params
                params.require(:registration).permit(:name, :registration, :email, :img)
              end
            # end
        #   end
        # end
end
