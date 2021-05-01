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
                food = Food.find(id: params[:food_id])

                render json: {
                    food: food
                }, status: :ok
            end

            def delete
                food = Food.find(id: params[food_id])
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