module Api
    module V1 
        class UsersController < ApplicationController
            require 'date'
            def index
               user = User.all

               render json: {
                   users: users
               }, status: :ok
            end
        
            def show
                user = User.find_by(id: params[:userId])
                logger.debug("リクエストされたユーザデータ")
                logger.debug(user)

                render json: {
                    user: user
                },status: :ok
            end

            def create
                user = User.new(name: params[:name])
                if user.save
                    render json: {
                        user: user
                    },status: :ok
                else
                    render json: {}
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
        
            def delete
                user = User.find(id: params[:id])

                render json: {}, status: :ok
            end

            def send_change_email
                user = User.find_by(id: params[:user_id])
                unconfirmed_email = params[:new_email]
                auth_code = get_six_string_number

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

            def send_change_password
                user = User.find_by(id: params[:user_id])
                auth_code = get_six_string_number
                new_password = params[:new_password]
                UserMailer.with(
                    user: user,
                    url: params[:url],
                    auth_code: auth_code
                ).change_password_email.deliver_later

                logger.debug("updateこんとろーららららら")
                logger.debug(auth_code)
                logger.debug("updateこんとろーららららら")

                render json:{},status: :ok
                if user.update!(
                    confirmation_password_code: auth_code,
                    confirmation_password_sent_at: Time.now,
                    unconfirmed_password: new_password
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
                user = User.find_by(id: params[:userId])

                if(true)
                    render json: {}, status: :ok
                else
                    render json: {}, status: :ng
                end
            end

            private 

                def user_params
                    params.require(:user).permit(:name,:point,:address,:email, :password)
                end

                def change_email_params
                    params.require(:user).permit(:id,:email)
                end
        end
    end
end
