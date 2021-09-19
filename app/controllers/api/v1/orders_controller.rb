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
                user = User.find_by(id: params[:user_id])

                orders = Food.joins(:orders).merge(
                    Order.where(order_user_id: user.id)
                ).select("foods.*,orders.*").order(updated_at: "DESC")

                render json: {
                    orders: orders,
                }, status: :ok
            end
        
            def show
                order = Food.get_order(params[:order_id])
                make_user = []

                order.each do |o| 
                    make_user = User.get_maker_user(o.make_user_id)
                end
                
                render json: {
                    order: order,
                    make_user:make_user,
                }, status: :ok
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

                if order.update!(order_status: params[:order_status])
                    logger.debug(order)
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

            def updateValuation
                order = Order.find(params[:order_id])
                make_user = User.find(order.make_user_id)

                newValuation = make_user.valuation + params[:valuation].to_i
                newValuation = newValuation / 2

                if make_user.update!(valuation: newValuation)
                    if order.update!(order_status: 2)
                        render json: {
                            order: order,
                            make_user:make_user,
                        }, status: :ok
                    else
                        logger.debug("ng")
                        render json: {}, status: :ng
                    end
                else
                    logger.debug("ng")
                    render json: {}, status: :ng
                end

            end

            private 

                def order_params
                    params.require(:order).permit(:order_status)
                end

                def task_status_params
                    params.require(:order).permit(:order_status)
                end
        end
    end
end
