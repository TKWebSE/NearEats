class User < ApplicationRecord
    has_many :foods
    has_many :make_users,class_name: "Order",foreign_key: "user"
    has_many :take_users,class_name: "Order",foreign_key: "user"   
    


end