# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
8.times do |n|
    user = User.new(
      name: "testユーザー_#{n}",
      email: "email#{n}@yahoo.co.jp",
      password: "123456",
      city:"東京都渋谷区",
      address: "#{n}県#{n}町の1-2-3",
      point: 100,
      valuation:3,
    )
  
    12.times do |m|
      food = user.foods.build(
        name: "フード名_#{m}",
        price: 500,
        description: "フード_#{m}の説明文です。",
        count:m,
        city:"東京都渋谷区",
      );

    # 12.times do |m|
    #   food2 = user.foods.build(
    #     name: "フード名_#{m}",
    #     price: 500,
    #     description: "フード_#{m}の説明文です。",
    #     count:m,
    #     city:"東京都新宿区",
    #   );

    end
    user.save!
end

3.upto(7){|x|
  user = User.find(x)
  maker = User.find(x+1)
  food = Food.find(x)   

  5.times do |m|
    order = Order.new(
      food_id:food.id,
      order_user_id: user.id,
      make_user_id: maker.id,
      count: m,
      order_status: m,
    )
    order.save!
    # order = food.orders.build(
    #       orders.food_id,
    #       order_user_id: user.id,
    #       make_user_id: maker.id,
    #       count: m,
    #       order_status: m,
    # );
   end

  # food.save!
}

