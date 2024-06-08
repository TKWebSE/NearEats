module Api
    module V1 
        class UsersController < ApplicationController
            require 'date'
            def index
               users = User.all

               render json: {
                   users: users
               }, status: :ok
            end

            # ユーザーの全情報を取得する
            def fetchCurrentUser
                user = current_api_v1_user

                if current_api_v1_user
                    orders = Order.where(order_user: current_api_v1_user.id).where(order_status: [1])
                    tasks = Order.where(make_user: current_api_v1_user.id).where(order_status: [0,2])

                    render json: { 
                    is_login: true, 
                    user: current_api_v1_user,
                    orders:orders.count,
                    tasks:tasks.count,
                    }
                else
                    render json: { is_login: false, user: current_api_v1_user }
                end
            end

            def show
                user = User.find_by(id: params[:userId])

                render json: {
                    user: user
                },status: :ok
            end

            def create
                user = User.find_by(email: params[:email])
                guest = Guest.find_by(email: params[:email])

                # customer = Stripe::Customer.create({
                #   email: params[:email],
                #   name: guest.name,
                # })
                # user.stripe_customer_id = customer.id
                # user.save!
                
                guest.delete

                if user 
                    render json: {
                    data: user,
                    }, status: :ok
                else
                 render json:{},status: :ng
                end
            end
            
            # ユーザーのアクティベート処理
            def activate 
                user = User.find(params[:userId])

                if user.confirmation_email_code != params[:confirmation_email_code]
                    raise RuntimeError
                    render json: { message: "認証コードが間違っています" } 
                end
                
                # ストライプに登録する
                customer = Stripe::Customer.create({
                    email: params[:email],
                    name: params[:name],
                })

                if user.update!(
                    confirmation_email_code: "",
                    activate:true,
                    confirmation_email_sent_at: nil,
                    stripe_customer_id:customer.id
                )
                    render json: {
                        user: user
                    }, status: :ok
                else 
                    render json: { message: "認証できませんでした" }
                end
            end
            
            def update
                user = User.find(params[:id])

                if user.update!(user_params)
                    render json: {
                        user: user
                    }, status: :ok
                else 
                    render json: {}
                end
            end
        
            def destroy
                user = User.find(id: params[:id])

                if user.destroy
                    render json: {}, status: :ok
                else
                    render json: {}, status: :ng    
                end
            end

            def send_change_email
                user = User.find_by(id: params[:user_id])
                unconfirmed_email = params[:new_email]
                auth_code = get_six_string_number
                
                if User.find_by(email: unconfirmed_email)
                    render json: {},status: :unauthorized
                else
                    UserMailer.with(
                        user: user,
                        url: params[:url],
                        new_email: unconfirmed_email,
                        auth_code: auth_code
                    ).change_emailaddress_email.deliver_later

                    if user.update!(
                        confirmation_email_code: auth_code,
                        confirmation_email_sent_at: Time.now,
                        unconfirmed_email: unconfirmed_email
                    )
                        render json: {
                            user: user
                        }, status: :ok
                    else 
                        render json: { },status: :ng 
                    end
              end
            end

            def send_change_password
                user = User.find_by(id: params[:user_id])
                auth_code = get_six_string_number

                UserMailer.with(
                    user: user,
                    url: params[:url],
                    auth_code: auth_code
                ).change_password_email.deliver_later

                if user.update!(
                    confirmation_password_code: auth_code,
                    confirmation_password_sent_at: Time.now,
                )
                    render json: {
                        user: user
                    }, status: :ok
                else 
                    render json: { },status: :ng 
                end
            end

            def update_email
                user = User.find_by(id: params[:user_id])
                
                logger.debug("DB側のパスコード")
                logger.debug(user.confirmation_email_code)
                logger.debug("params側のパスコード")
                logger.debug(params[:params][:confirmation_code])

                if (Time.now - user.confirmation_email_sent_at) >= 10.minute
                    raise RuntimeError
                end
                
                if user.confirmation_email_code != params[:params][:confirmation_code]
                    raise RuntimeError
                end
                    
                if(user.update!(
                    email: user.unconfirmed_email,
                    confirmation_email_code: nil,
                    confirmed_at: Time.now,
                    confirmation_email_sent_at: nil,
                    unconfirmed_email: nil,
                    ))
                    render json: {user: user}, status: :ok
                else
                    render json: {}, status: :unauthorized
                end
            end

            def update_password
                user = User.find_by(id: params[:user_id])

                if (Time.now - user.confirmation_password_sent_at) >= 10.minute
                    raise RuntimeError
                end

                if user.confirmation_password_code != params[:params][:confirmation_code]
                    raise RuntimeError
                end

                render json: {user: user}, status: :ok
            end

            private 

                def user_params
                    params.require(:user).permit(:name,:point,:address,:city,:email, :password)
                end

                def change_email_params
                    params.require(:user).permit(:id,:email)
                end
        end
    end
end
