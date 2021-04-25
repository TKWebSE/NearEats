module Api
    module V1 
        class Restaurant < ApplicationController
            def index
               restaurants = Restaurant.all

               render json: {
                   restaurants: restaurants
               }, status: :ok
            end
        
            def show
                restaurant = Restaurant.new(id: params[restaurant_id])

                render json: {
                    restaurant: restaurant
                },status: :ok
            end

            def create
                restaurant = Restaurant.new(name: params[:name],)
                if restaurant.save
                    render json {
                        restaurant: restaurant
                 },status: :ok
                else
                    render json{}
            end
            
            def update
                restaurant = Restaurant.find(id: params[:id])
                if restaurant.save
                    render json: {
                        restaurants: restaurants
                    }, status: :ok
                else 
                    render json: {},status: 
            end
        
            def delete
                restaurant = Restaurant.find(id: params[:id])

                render json{}, status: :ok
            end
        end
    end
end