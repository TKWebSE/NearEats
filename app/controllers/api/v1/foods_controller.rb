module Api
    module V1
        class FoodsController < ApplicationController
            def index
                user = User.find_by(id: params[:user_id])
                paramsCity = params[:city]
                # paramsSearchWord = params[:serchWord]
                logger.debug("コメント")
                logger.debug(params[:city])
                logger.debug(params[:serchWord])

                # if paramsCity == nil ||  paramsCity == undefined
                #     logger.debug("コメント")
                #     # if paramsSearchWord === null ||  paramsSearchWord === undefined
                #     #     foods = Food.where(deleted: false).where.not(user_id:user.id).order(updated_at: "DESC");
                #     # else
                #     #     foods = Food.where("name LIKE ?", "%paramsSearchWord%" ).where(deleted: false).where.not(user_id:user.id).order(updated_at: "DESC"); 
                #     # end
                # else
                #     # if paramsSearchWord === null ||  paramsSearchWord === undefined 
                #     #     # logger.debug("コメント")
                #     #     foods = Food.where(city:paramsCity).where(deleted: false).where.not(user_id:user.id).order(updated_at: "DESC");
                #     # else
                #     #     foods = Food.where(city:paramsCity).where("name LIKE ?", "%paramsSearchWord%" ).where(deleted: false).where.not(user_id:user.id).order(updated_at: "DESC");
                #     # end
                # end
                foods = nil

                render json: {
                    foods: foods
                }, status: :ok
            end

            # def index
            #     foods = Food.all.order(updated_at: "DESC");
                
            #     render json: {
            #         foods: foods
            #     }, status: :ok
            # end
            
            def myfoods
                user = User.find_by(id: params[:user_id])
                foods = Food.where(user_id: user.id).order(updated_at: "DESC");

                render json: {
                    foods: foods
                }, status: :ok
            end

            def show 
                food = Food.find_by(id: params[:id])

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

            #    name: foodparams[:name],price: foodparams[:price],description: foodparams[:description]
               if food.update(food_params) 
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
