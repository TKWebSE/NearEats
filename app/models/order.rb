class Order < ApplicationRecord
    belongs_to :make_user,class_name: "User", optional: true
    belongs_to :order_user,class_name: "User", optional: true
    belongs_to :food, optional: true
end
