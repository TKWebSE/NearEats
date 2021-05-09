class User < ApplicationRecord
    has_many :foods
    has_many :active_order,class_name: "Order",foreign_key: "make_user_id"
    has_many :user,:through: :order,source: :make_user
    has_many :passive_order,class_name: "Order",foreign_key: "order_user_id"
    has_many :user,:through: :order,source: :order_user
end