module Api
    module V1 
        class OrdersController < ApplicationController

            def taskIndex
                user = User.find_by(id: params[:user_id])
                logger.debug(user.name)
                tasks = Order.where(make_user_id: user.id)
                # logger.debug(tasks.first)

                logger.debug("aaaa")
                # food = tasks.first
                logger.debug(tasks)
                logger.debug("hgayop")
                foods = []

                tasks.each do |task|
                    food = task.food
                    logger.debug(task)
                    logger.debug("ktkktr")
                    logger.debug(task)
                    foods.push food
                end

                logger.debug("updateこんとろーららららら")
                logger.debug(foods)
                logger.debug(tasks)

                render json: {
                    tasks: tasks,
                    foods: foods
                }, status: :ok
            end

            def taskShow
                task = Order.find(params[:id])

                render json: {
                    task: task
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