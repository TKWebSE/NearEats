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
                logger.debug("updateこんとろーららららら")
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

            private 

                def user_params
                    params.require(:userr).permit(:name,:point,:address,:email, :password)
                end
        end
    end
end
