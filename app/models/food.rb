class Food < ApplicationRecord
    belongs_to :user,dependent: :destroy
    belong_to :order
end