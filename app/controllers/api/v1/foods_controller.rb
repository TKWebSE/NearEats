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
            end

            def show 
            end

            def delete
                food = Foods
            end
        end
    end
end