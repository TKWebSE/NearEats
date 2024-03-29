module Api
    module V1
        class FoodsController < ApplicationController
            require "mini_magick"
            
            def index
                user = User.find_by(id: params[:user_id])
                paramsCity = params[:city]
                paramsSearchWord = params[:serchWord]

                logger.debug(params[:city])
                logger.debug(params[:serchWord])

                if paramsCity == nil ||  paramsCity == ""
                    if paramsSearchWord == nil ||  paramsSearchWord  == ""
                        foods = Food.where(deleted: false).where.not(user_id:user.id).where.not(count: 0).order(updated_at: "DESC");
                    else
                        foods = Food.where("name like ?", `%1%` ).where(deleted: false).where.not(user_id:user.id).where.not(count: 0).order(updated_at: "DESC"); 
                    end
                else
                    if paramsSearchWord === nil ||  paramsSearchWord  == ""
                        foods = Food.where(city:paramsCity).where(deleted: false).where.not(user_id:user.id).where.not(count: 0).order(updated_at: "DESC");
                    else
                        foods = Food.where(city:paramsCity).where("name like ?", "%1%" ).where(deleted: false).where.not(user_id:user.id).where.not(count: 0).order(updated_at: "DESC");
                    end
                end
                logger.debug(foods)

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
                
                logger.debug("user")
                logger.debug(foods)
                render json: {
                    foods: foods
                }, status: :ok
            end

            def buyfood
                order_user = User.find(params[:order_user_id]) 
                food = Food.find(params[:food_id])
                make_user = User.find(food.user.id)

                if order_user.point < food.price
                    throw e;
                end

                if food.count <= 0
                    throw e;
                end

                order = Order.new(make_user:make_user,order_user:order_user,food:food)
                order.save!

                food.update!(count: 0)  

                new_point = order_user.point - food.price
                order_user.update!(point: new_point)

                render json: {
                    order:order,
                    food:food,
                    order_user:order_user,
                }, status: :ok
            end

            def show 
                food = Food.find_by(id: params[:id])
                logger.debug(food.inspect)
                render json: {
                    food: food
                }, status: :ok
            end

            def new
                user = User.find(params[:user_id])
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
                logger.debug(food.image.url)
                if params[:image] != nil
                    img = MiniMagick::Image.read(params[:image])
                    img.resize_to_fill "128x128" 
                    img.write "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
                    food.image = img 
                    logger.debug(food.image.url)
                end

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
                logger.debug("aaaaa")
                logger.debug(food_params[:name])
            
                # image = MiniMagick::Image.open("宇宙猫.jpg")
                # image.path #=> "/var/folders/k7/6zx6dx6x7ys3rv3srh0nyfj00000gn/T/magick20140921-75881-1yho3zc.jpg"
                # image.resize "100x100"
                # image.format "jpg" 
                # image.write "output.png"

                # if food_params[:image] != nil
                #     logger.debug("nnnnn")
                #     img = MiniMagick::Image.read(food_params[:image])
                #     img.resize_to_fill "128x128"#resizeをresize_to_fillに変更
                #     img.write "public/images/hoge.jpg"
                #  end

            #    name: foodparams[:name],price: foodparams[:price],description: foodparams[:description]
               if food.update!(food_params) 
                    render json: {
                        food:food
                    },status: :ok
               else
                   render json: {}
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
                    params.require(:food).permit(:image,:name,:price,:description,:city,:user_id)
                end
        end
    end
end
