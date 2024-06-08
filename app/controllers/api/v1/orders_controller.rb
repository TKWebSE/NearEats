module Api
    module V1 
        class OrdersController < ApplicationController

            def taskIndex
                user = User.find(params[:user_id])
                tasks = Order.where(make_user_id: user.id).order(:order_status,updated_at: "DESC")
                foods = []
                tasks.each do |task| 
                    # フードの作成者が9のやつだけ取りに行ってる
                    food = Food.find(task.food_id)
                    logger.debug(task)
                    logger.debug(task.order_user_id)
                    logger.debug(food)
                    logger.debug(food.name)
                    foods.push(food) 
                end
                # tasks = Order.joins(:food).where(make_user_id: user.id)
                # .select("foods.*,orders.*").order(updated_at: "DESC")

                render json: {
                    foods:foods,
                    tasks: tasks,
                }, status: :ok
            end

            def taskShow
                # task = Food.joins(:orders).merge(
                #     Order.where(id: params[:order_id])
                # ).select("foods.*,orders.*")
                task = Order.find(params[:order_id]);
                food = Food.find(task.food_id);
                order_user = User.get_order_user(task.order_user_id)

                # make_user = User.get_make_user(food.each  |f| f.make_user_id end)

                render json: {
                    food:food,
                    task: task,
                    order_user:order_user,
                }, status: :ok
            end

            def taskUpdate
                task = Order.find(params[:id])
                order_user = User.find(task.order_user_id)
                make_user = User.find(task.make_user_id)
                food = Food.find(task.food_id)

                logger.debug("検査用")
                logger.debug(task.order_status)
                logger.debug("検査用")

                logger.debug(food.price)
                logger.debug(make_user.point )

                # タスクキャンセル
                if params[:order_status] === "4"
                    order_user.point = order_user.point + food.price
                    order_user.save!
                    logger.debug("タスクキャンセル")
                end

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
                orders = Order.where(order_user_id: user.id).order(:order_status,updated_at: "DESC")
                foods = []
                orders.each do |order| 
                    # フードの作成者が9のやつだけ取りに行ってる
                    food = Food.find(order.food_id)
                    logger.debug(order)
                    logger.debug(order.order_user_id)
                    logger.debug(food)
                    logger.debug(food.name)
                    foods.push(food) 
                end
                # orders = Food.joins(:orders).merge(
                #     Order.where(order_user_id: user.id)
                # ).select("foods.*,orders.*").order(updated_at: "DESC")

                # orders = Food.joins(:order).where(order_user_id: user.id)
                # .select("foods.*,orders.*").order(updated_at: "DESC")
                
                render json: {
                    foods:foods,
                    orders: orders,
                }, status: :ok
            end
        
            def show
                # order = Food.get_order(params[:order_id])
                order = Order.find(params[:order_id]);
                food = Food.find(order.food_id);
                make_user = User.find(order.make_user_id);

                # order.each do |o| 
                #     make_user = User.get_maker_user(o.make_user_id)
                # end
                
                render json: {
                    order: order,
                    food:food,
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
                order_user = User.find(order.order_user_id)
                make_user = User.find(order.make_user_id)
                food = Food.find(order.food_id)

                logger.debug("検査用")
                logger.debug(order.order_status)
                logger.debug("検査用")

                logger.debug(order_user.point)
                logger.debug(food.price)

                # 取引完了
                if params[:order_status] === "2"
                    make_user.point = make_user.point + food.price
                    make_user.save!
                    logger.debug("取引完了")
                end

                # オーダーキャンセル
                if params[:order_status] === "3"
                    order_user.point = order_user.point + food.price 
                    order_user.save!
                    logger.debug("オーダーをキャンセル")
                end        

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
                food = Food.find(order.food_id)
                
                newValuation = make_user.valuation + params[:valuation].to_i
                newValuation = newValuation / 2
                logger.debug(params[:valuation])
                logger.debug(newValuation)

                addPoint = make_user.point + food.price

                if make_user.update!(valuation: newValuation,point: addPoint)
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
