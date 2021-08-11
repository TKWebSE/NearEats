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
      address: "#{n}県#{n}町の1-2-3",
      point: 100,
    )
  
    12.times do |m|
      food = user.foods.build(
        name: "フード名_#{m}",
        price: 500,
        description: "フード_#{m}の説明文です。",
        count:m,
        station:"#{m}駅",
      );

    end
    user.save!
end

3.upto(7){|x|
  user = User.find(x)
  maker = User.find(x+1)
  food = Food.find(x)   

  6.times do |m|
    order = food.orders.build(
          order_user_id: user.id,
          make_user_id: maker.id,
          count: m,
          order_status: 0,
        );
  end
  food.save!
}

