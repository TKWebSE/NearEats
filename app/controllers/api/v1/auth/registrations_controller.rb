class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController

  # ユーザーをサインアップする
  # def create 
  #   super
    

  #     # customer = Stripe::Customer.create({
  #     #   email: params[:email],
  #     #   name: params[:name],
  #     # })
  #     # user.stripe_customer_id = customer.id
  #     # user.save!
  # end 

        private
        def sign_up_params
          params.require(:registration).permit(:registration,:name,:email, :img, :password, :stripe_customer_id,:password_confirmation,:addressm,:session)
        end 

        def account_update_params
          params.require(:registration).permit(:name, :registration, :email, :img,:password,:password_confirmation,:session)
        end
end
