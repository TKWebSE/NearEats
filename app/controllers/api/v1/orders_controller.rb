module Api
    module V1 
        class OrdersController < ApplicationController

            def taskIndex
                orders = Order.where(make_user: params[:userId])
                orders = Order.where(make_user: 1)
                logger.debug("updateこんとろーららららら")
                logger.debug(orders)

                render json: {
                    orders: orders
                }, status: :ok
            end

            def taskShow
                logger.debug("updateこんとろーららららら")

                render json: {
                    order: order
                }, status: :ok
            end

            def taskUpdate
                logger.debug("updateこんとろーららららら")

                render json: {
                    orders: orders
                }, status: :ok
            end


            def index
               orders = Order.all

               render json: {
                   orders: orders
               }, status: :ok
            end
        
            def show
                order = Order.find_by(id: params[:userId])

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