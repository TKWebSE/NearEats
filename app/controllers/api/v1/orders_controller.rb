module Api
    module V1 
        class OrdersController < ApplicationController
            def index
               orders = Order.all

               render json: {
                   orders: orders
               }, status: :ok
            end
        
            def show
                logger.debug("コメント")
                logger.debug(params)
                logger.debug(params[:userId])
                logger.debug("コメント")
                order = Order.find_by(id: params[:userId])
                logger.debug(user)
                render json: {
                    order: order
                },status: :ok
            end

            def create
                order = Order.new(name: params[:name])
                if user.save
                    render json: {
                        order: order
                    },status: :ok
                else
                    render json: {}
                end
            end
            
            def update
                logger.debug("updateこんとろーららららら")
                order = Order.find(params[:id])

                if order.update!(order_params)
                    render json: {
                        order: order
                    }, status: :ok
                else 
                    render json: {}
                end
            end
        
            def delete
                order = Order.find(id: params[:id])

                render json: {}, status: :ok
            end

            private 

                def order_params
                    params.require(:order).permit(:name,:point,:address,:email, :password)
                end
        end
    end
end