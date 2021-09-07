import { TASK_TEXT } from "../../constants";

export const orderStatusText = (order_status) => {

  switch (order_status) {
    case "0":
      return {
        STATUS_TEXT: TASK_TEXT.TASK_STATUS_UNFINISHED_TEXT,
      }
    case "1":
      return {
        STATUS_TEXT: TASK_TEXT.TASK_STATUS_FINISHED_TEXT,
      }
    case "2":
      return {
        STATUS_TEXT: TASK_TEXT.TASK_STATUS_ORDER_CANCEL_TEXT,
      }
    case "3":
      return {
        STATUS_TEXT: TASK_TEXT.TASK_STATUS_TASK_CANCEL_TEXT,
      }

  }
}
