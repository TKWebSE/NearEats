import { ORDER_TEXT, ORDER_TASK_STATUS_NUMBERS } from "../../constants";

export const orderStatusTimeText = {
  ORDER_STATUS_UNFINISHED_TIME_TEXT: "注文受付日時：",
  ORDER_STATUS_FINISHED_TIME_TEXT: "配達完了日時",
  ORDER_STATUS_DONE_TIME_TEXT: "取引完了日時：",
  ORDER_STATUS_CANCEL_TIME_TEXT: "キャンセルした日時：",
  TASK_STATUS_CANCEL_TIME_TEXT: "キャンセルされた日時：",
}

export const getOrderStatusTimeText = (order_status) => {

  switch (order_status) {
    case ORDER_TASK_STATUS_NUMBERS.TASK_UNFINISHED:
      return {
        STATUS_TEXT: orderStatusTimeText.ORDER_STATUS_UNFINISHED_TIME_TEXT,
      }
    case ORDER_TASK_STATUS_NUMBERS.TASKFINISH:
      return {
        STATUS_TEXT: orderStatusTimeText.ORDER_STATUS_FINISHED_TIME_TEXT,
      }
    case ORDER_TASK_STATUS_NUMBERS.ORDER_CANCEL:
      return {
        STATUS_TEXT: orderStatusTimeText.TASK_STATUS_CANCEL_TIME_TEXT,
      }
    case ORDER_TASK_STATUS_NUMBERS.TASK_CANCEL:
      return {
        STATUS_TEXT: orderStatusTimeText.TASK_STATUS_CANCEL_TIME_TEXT,
      }
  }
}
