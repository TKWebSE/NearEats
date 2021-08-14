class Food < ApplicationRecord
    belongs_to :user
    has_many :orders,foreign_key:"id",primary_key: "id"
end