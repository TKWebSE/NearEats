import { ORDER_TEXT } from "../../constants";

export const orderStatusTimeText = (order_status) => {

  switch (order_status) {
    case "0":
      return {
        STATUS_TEXT: ORDER_TEXT.ORDER_STATUS_UNFINISHED_TIME_TEXT,
      }
    case "1":
      return {
        STATUS_TEXT: ORDER_TEXT.ORDER_STATUS_FINISHED_TIME_TEXT,
      }
    case "2":
      return {
        STATUS_TEXT: ORDER_TEXT.ORDER_STATUS_CANCEL_TIME_TEXT,
      }
    case "3":
      return {
        STATUS_TEXT: ORDER_TEXT.TASK_STATUS_CANCEL_TIME_TEXT,
      }

  }
}
