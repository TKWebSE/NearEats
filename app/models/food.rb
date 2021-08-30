class Food < ApplicationRecord
    belongs_to :user
    has_many :orders,foreign_key:"id",primary_key: "id"

    scope :get_task,->(order_id) { joins(:orders).merge(
            Order.where(id: order_id)
        ).select("foods.*,orders.*")
    }

end