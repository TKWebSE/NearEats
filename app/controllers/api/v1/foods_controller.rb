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

            def show 
                restaurant_id = Restaurant.find_by(id: params[:restaurantId])
                food = Food.find_by(id: params[:id],restaurant_id: restaurant_id)

                render json: {
                    food: food
                }, status: :ok
            end

            def delete
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