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
      stripe_customer_id: "cus_L4PnH4PzhSqvXM",
    )
      
    user.save!
end

# foodを作る
  user = User.first
  food = user.foods.create(
  [
    {
      name:"クロワッサン",
      price:"400",
      description: "やきたてクロワッサンです！",
      image: "test1.jpg",
      count: 1,
      city: "東京都渋谷区",
      deleted: false,
    },
    {
      name:"焼き魚",
      price:"500",
      description: "今日釣れた魚を焼いてお届けします！",
      image: "test2.jpg",
      count: 1,
      city: "東京都渋谷区",
      deleted: false,
    },
    {
      name:"オムライス",
      price:"450",
      description: "たまごふわふわ！オムライスです！",
      image: "test3.jpg",
      count: 1,
      city: "東京都渋谷区",
      deleted: false,
    },
    {
      name:"キノコのピザ",
      price:"500",
      description: "旬のキノコを使ったチーズたっぷりのピザです！",
      image: "test4.jpg",
      count: 1,
      city: "東京都渋谷区",
      deleted: false,
    },
    {
      name:"からあげ8個",
      price:"400",
      description: "子供に大人気のサクサク唐揚げ。8個入り",
      image: "test5.jpg",
      count: 1,
      city: "東京都渋谷区",
      deleted: false,
    },
    {
      name:"かぼちゃのポタージュ",
      price:"300",
      description: "体が温まるかぼちゃのスープ。温めなおしてもおいしい！",
      image: "test6.jpg",
      count: 1,
      city: "東京都渋谷区",
      deleted: false,
    },
    {
      name:"ステーキ",
      price:"1000",
      description: "肉厚！ステーキ！ミディアムでお届けします！松坂牛使用",
      image: "test7.jpg",
      count: 1,
      city: "東京都渋谷区",
      deleted: false,
    },
    {
      name:"うな重",
      price:"1200",
      description: "国産うなぎを贅沢に使用したうな重。活力を付けたいあなたにオススメ",
      image: "test8.jpg",
      count: 1,
      city: "東京都渋谷区",
      deleted: false,
    }
  ]
  );

# order作成
3.upto(2){|x|
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
   end
}

    # 使用していたやつ
    # 12.times do |m|
    #   food2 = user.foods.build(
    #     name: "フード名_#{m}",
    #     price: 500,
    #     description: "フード_#{m}の説明文です。",
    #     count:m,
    #     city:"東京都新宿区",
    #   );

    # end
