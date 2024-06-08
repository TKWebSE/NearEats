import { TASK_TEXT, ORDER_TASK_STATUS_NUMBERS } from "../../constants";

export const taskStatusTimeText = {
    TASK_STATUS_UNFINISHED_TIME_TEXT: "注文受付日時：",
    TASK_STATUS_PENDINGEVALUATION_TEXT: "配達日時：",
    TASK_STATUS_FINISHED_TIME_TEXT: "配達完了日時：",
    TASK_STATUS_ORDER_CANCEL_TIME_TEXT: "キャンセルされた日時：",
    TASK_STATUS_TASK_CANCEL_TIME_TEXT: "キャンセルした日時：",
}

export const getTaskStatusTimeText = (order_status) => {

    switch (order_status) {
        case ORDER_TASK_STATUS_NUMBERS.TASK_UNFINISHED:
            return {
                STATUS_TEXT: taskStatusTimeText.TASK_STATUS_UNFINISHED_TIME_TEXT,
            }
        case ORDER_TASK_STATUS_NUMBERS.ORDER_WATINGE_VALUATION:
            return {
                STATUS_TEXT: taskStatusTimeText.TASK_STATUS_PENDINGEVALUATION_TEXT,
            }
        case ORDER_TASK_STATUS_NUMBERS.COMPLETE_ORDER:
            return {
                STATUS_TEXT: taskStatusTimeText.TASK_STATUS_FINISHED_TIME_TEXT,
            }
        case ORDER_TASK_STATUS_NUMBERS.ORDER_CANCEL:
            return {
                STATUS_TEXT: taskStatusTimeText.TASK_STATUS_ORDER_CANCEL_TIME_TEXT,
            }
        case ORDER_TASK_STATUS_NUMBERS.TASK_CANCEL:
            return {
                STATUS_TEXT: taskStatusTimeText.TASK_STATUS_TASK_CANCEL_TIME_TEXT,
            }

    }
}
