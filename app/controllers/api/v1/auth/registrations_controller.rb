class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
    # module Api
        # module V1
        #   module Auth


            def new 
                console.log("neko")
                render json: {
                        name:"nameeeeeeeneko"
                    },status: :ok
            end
              private
              def sign_up_params
                params.permit(:name, :nickname, :email, :img, :password, :password_confirmation)
              end
      
              def account_update_params
                params.permit(:name, :nickname, :email, :img)
              end
            # end
        #   end
        # end
end
