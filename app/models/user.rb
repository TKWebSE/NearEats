# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable 
  include DeviseTokenAuth::Concerns::User

  has_many :foods
  has_many :orders

  # after_create :send_confirmation_email, if: -> { User.devise_modules.include?(:confirmable) }
  # private
  # def send_confirmation_email
  #   self.send_confirmation_instructions
  # end

  scope :get_order_user,->(order_user_id) { 
    where(id: order_user_id)
  }
  scope :get_maker_user,->(make_user_id) { 
    where(id: make_user_id)
  }
end
