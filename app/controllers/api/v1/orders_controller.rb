module Api
    module V1 
        class OrdersController < ApplicationController

            def taskIndex
                user = User.find_by(id: params[:user_id])

                tasks = Food.joins(:orders).merge(
                    Order.where(make_user_id: user.id)
                ).select("foods.*,orders.*").order(updated_at: "DESC")

                render json: {
                    tasks: tasks,
                }, status: :ok
            end

            def taskShow
                # task = Food.joins(:orders).merge(
                #     Order.where(id: params[:order_id])
                # ).select("foods.*,orders.*")

                task = Food.get_task(params[:order_id])
                order_user = []

                task.each do |t| 
                    order_user = User.get_order_user(t.order_user_id)
                end

                # make_user = User.get_make_user(food.each  |f| f.make_user_id end)



                render json: {
                    task: task,
                    order_user:order_user,
                }, status: :ok
            end

            def taskUpdate
                task = Order.find(params[:id])

                if task.update!(task_status_params)
                    render json: {
                        task: task
                    }, status: :ok
                else
                    render json: {}
                end
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

                def task_status_params
                    params.require(:order).permit(:order_status)
                end
        end
    end
end