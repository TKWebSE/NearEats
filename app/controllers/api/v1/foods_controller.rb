module Api
    module V1
        class FoodsController < ApplicationController
            def index
                restaurant = Restaurant.find(1)
                foods = restaurant.foods.all
                
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
                restaurant = Restaurant.find(1)
                food = restaurant.foods.build(
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
                food = Food.new(name: params[:name],fee: params[:fee])

                if food.save
                    render json: {
                        food: food
                    }, status: :ok
                else
                    render json: {}
                end
            end

            def update
               food = Food.find_by(id: params[:id])
               
               food.name = params[:name]
               food.price = params[:price]
               food.description = params[:description]

               if food.save 
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
        end
    end
end