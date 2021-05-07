class Order < ApplicationRecord
    belongs_to :order_user,class_name: "User"
    belong_to :make_user,class_name: "User"
    belongs_to :food
end
