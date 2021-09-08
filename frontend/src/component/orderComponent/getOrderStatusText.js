import { ORDER_TEXT, ORDER_TASK_STATUS_NUMBERS } from "../../constants";

export const orderStatusText = {
  ORDER_STATUS_UNFINISHED_TEXT: "注文中",
  ORDER_STATUS_PENDINGEVALUATION_TEXT: "評価待ち",
  ORDER_STATUS_FINISHED_TEXT: "配達完了",
  ORDER_STATUS_CANCEL_TEXT: "注文キャンセル",
  TASK_STATUS_CANCEL_TEXT: "取引キャンセル",
}

export const getOrderStatusText = (order_status) => {

  switch (order_status) {
    case ORDER_TASK_STATUS_NUMBERS.TASK_UNFINISHED:
      return {
        STATUS_TEXT: orderStatusText.ORDER_STATUS_UNFINISHED_TEXT,
      }
    case ORDER_TASK_STATUS_NUMBERS.ORDER_WATINGE_VALUATION:
      return {
        STATUS_TEXT: orderStatusText.ORDER_STATUS_PENDINGEVALUATION_TEXT,
      }
    case ORDER_TASK_STATUS_NUMBERS.TASKFINISH:
      return {
        STATUS_TEXT: orderStatusText.ORDER_STATUS_FINISHED_TEXT,
      }
    case ORDER_TASK_STATUS_NUMBERS.ORDER_CANCEL:
      return {
        STATUS_TEXT: orderStatusText.TASK_STATUS_CANCEL_TEXT,
      }
    case ORDER_TASK_STATUS_NUMBERS.TASK_CANCEL:
      return {
        STATUS_TEXT: orderStatusText.TASK_STATUS_CANCEL_TEXT,
      }
  }
}
