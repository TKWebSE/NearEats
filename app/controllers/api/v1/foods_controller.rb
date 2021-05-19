module Api
    module V1
        class FoodsController < ApplicationController
            def index
                foods = Food.all
                
                render json: {
                    foods: foods
                }, status: :ok
            end

            def show 
                food = Food.find_by(id: params[:id])

                logger.debug(params)
                render json: {
                    food: food
                }, status: :ok
            end

            def new
                user = Restaurant.find(1)
                food = user.foods.build(
                    id: params[:id],name: params[:name],price: params[:price]
                    )
                
                if food
                    render json: {
                        food: food
                    }
                else
                    render json: {}
                end
            end

            def create
                food = Food.new(food_params)
                food.count = 1
                food.station = "東京駅"

                if food.save!
                    render json: {
                        food: food
                    }, status: :ok
                else
                    render json: {}
                end
            end

            def update
               food = Food.find_by(id: params[:id])
               logger.debug("コメント")
               logger.debug(params)
               logger.debug(params[:food])
               logger.debug("コメント")

            #    name: foodparams[:name],price: foodparams[:price],description: foodparams[:description]
               if food.update(food_params) 
                logger.debug("ifコメント")
                logger.debug(params[:food])
                    render json: {
                        food:food
                    },status: :ok
               else
                   reder json: {}
               end
            end

            def destroy
                food = Food.find(params[:id])
                food.deleted = true
                
                if food.save
                    render json: {
                        food: food
                    } ,status: :ok
                else
                    render json: {}
                end
            end

            private 

                def food_params
                    params.require(:food).permit(:name,:price,:description,:user_id)
                end
        end
    end
end