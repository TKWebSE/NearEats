class User < ApplicationRecord
    has_many :foods
    has_many :make_users,class_name: "Order",foreign_key: "user"
    has_many :take_users,class_name: "Order",foreign_key: "user"   
    
    has_secure_password
    
    validates :email,presence:true,uniqueness: true
    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
end