class Order < ApplicationRecord
    belongs_to :make_user,class_name: "User", optional: true
    belongs_to :order_user,class_name: "User", optional: true
    belongs_to :food, optional: true

    def SetMakeUser 
    end

    def changeOrderStatus

        case changeStatus
            when "Order" then
            self.order_status = 0
            when "Finish" then
                self.order_status = 1
            when "Cancel" then
                self.order_status = 2
        end
        
    end
end
