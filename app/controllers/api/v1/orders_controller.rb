module Api
    module V1 
        class OrdersController < ApplicationController

            def taskIndex
                user = User.find_by(id: params[:user_id])
                logger.debug(user.name)

                tasks = Order.joins(:food).where(make_user_id: 5..7).select("foods.*,orders.*").order(updated_at: "DESC")

                taskList = []

                tasks.each do |task|
                    food = task.attributes
                    taskList.push food
                end

                logger.debug(taskList)

                render json: {
                    taskList: taskList,
                }, status: :ok
            end

            def taskShow
                user = User.find_by(id: params[:user_id])
                task = Order.find(make_user_id: user.id)

                food = task.food

                render json: {
                    task: task,
                    food: food
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