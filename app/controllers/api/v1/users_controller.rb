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
                logger.debug("コメント")
                logger.debug(params)
                logger.debug(params[:userId])
                logger.debug("コメント")
                user = User.find_by(id: params[:userId])
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
                user = User.find(id: params[:id])
                if user.save
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

            private 

                def user_params
                    params.require(:user).permit(:name,:price,:description,:userId)
                end
        end
    end
end