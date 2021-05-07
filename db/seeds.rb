# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
3.times do |n|
    user = User.new(
      name: "testユーザー_#{n}",
      email: "email#{m}@yahoo.co.jp",
      password: "1234",
      address: "#{m}県#{m}町の1-2-3",
      point: 100,
      time_required: 10,
    )
  
    12.times do |m|
      user.foods.build(
        name: "フード名_#{m}",
        price: 500,
        description: "フード_#{m}の説明文です。",
        count:m,
        station:"#{m}駅",
      )
    end
 
    5.times do |o|
      order = user.orders.build(
        make_user: o,
        food_id: food.id,
        count: o,
        order_status: 1,
      )
    end

    user.save!
 end