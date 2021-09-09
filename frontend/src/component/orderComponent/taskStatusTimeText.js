import { TASK_TEXT, ORDER_TASK_STATUS_NUMBERS } from "../../constants";

export const taskStatusTimeText = (order_status) => {

    switch (order_status) {
        case "0":
            return {
                STATUS_TEXT: TASK_TEXT.TASK_STATUS_UNFINISHED_TIME_TEXT,
            }
        case "1":
            return {
                STATUS_TEXT: TASK_TEXT.TASK_STATUS_FINISHED_TIME_TEXT,
            }
        case "2":
            return {
                STATUS_TEXT: TASK_TEXT.TASK_STATUS_ORDER_CANCEL_TIME_TEXT,
            }
        case "3":
            return {
                STATUS_TEXT: TASK_TEXT.TASK_STATUS_TASK_CANCEL_TIME_TEXT,
            }

    }
}
