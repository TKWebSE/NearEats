class User < ApplicationRecord
    has_many :make_users,class_name: "Order",foreign_key: "make_user"
    has_many :take_users,class_name: "Order",foreign_key: "order_user"   
    has_many :foods,through: :order

    has_many :makers, through: :make_users,source: :make_user
    has_many :takers, through: :take_users,source: :take_user

end