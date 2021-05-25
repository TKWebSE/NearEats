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
                user = User.new(id: params[user_id])
                logger.debug("コメント")
                logger.debug(params)
                logger.debug(params[:food])
                logger.debug("コメント")
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
                    params.require(:food).permit(:name,:price,:description,:user_id)
                end
        end
    end
end