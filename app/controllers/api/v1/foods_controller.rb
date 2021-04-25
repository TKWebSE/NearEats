module Api
    module v1
        class FoodsController < ApplicationController
            def index
                restaurant = Restaurant. find()
                foods = restaurant.foods.all
                
                render json: {
                    foods: foods
                }, status: :ok
            end
            
            def create
                food = Foods.new(name params[:name],fee: params[:fee],restaurant)
            end

            def show 
            end

            def delete
                food = Foods
            end
        end
    end
end