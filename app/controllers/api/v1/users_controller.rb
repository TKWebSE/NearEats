module Api
    module V1 
        class UsersController < ApplicationController
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
                user = User.find_by(id: params[:userId])
                logger.debug("updateこんとろーららららら")
                logger.debug(user.name)
                logger.debug("updateこんとろーららららら")
                UserMailer.with(user: user).change_emailaddress_email.deliver_later         
                
                if(true)
                    render json: {}, status: :ok
                else
                    render json: {}, status: :ng
                end
            end

            def send_change_password                
                UserMailer.with(user: user).change_password_email.deliver_later
                
                if(true)
                    render json: {}, status: :ok
                else
                    render json: {}, status: :ng
                end
            end

            def update_email

                if(true)
                    render json: {}, status: :ok
                else
                    render json: {}, status: :ng
                end
            end

            def update_password
                user = User.find_by(id: params[:userId])
                
                # userのemailに対して、メールを送信する
                # user.update(email: )!

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
