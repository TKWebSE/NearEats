import { ORDER_TASK_STATUS_NUMBERS } from "../../constants";

export const taskStatusText = {
    TASK_STATUS_UNFINISHED_TEXT: "未配達",
    TASK_STATUS_FINISHED_TEXT: "配達完了",
    TASK_STATUS_PENDINGEVALUATION_TEXT: "評価待ち",
    TASK_STATUS_ORDER_CANCEL_TEXT: "キャンセルされました",
    TASK_STATUS_TASK_CANCEL_TEXT: "キャンセルしました",
}

export const gettaskStatusText = (order_status) => {

    switch (order_status) {
        case ORDER_TASK_STATUS_NUMBERS.TASK_UNFINISHED:
            return {
                STATUS_TEXT: taskStatusText.TASK_STATUS_UNFINISHED_TEXT,
            }
        case ORDER_TASK_STATUS_NUMBERS.ORDER_WATINGE_VALUATION:
            return {
                STATUS_TEXT: taskStatusText.TASK_STATUS_PENDINGEVALUATION_TEXT,
            }
        case ORDER_TASK_STATUS_NUMBERS.TASKFINISH:
            return {
                STATUS_TEXT: taskStatusText.TASK_STATUS_FINISHED_TEXT,
            }
        case ORDER_TASK_STATUS_NUMBERS.ORDER_CANCEL:
            return {
                STATUS_TEXT: taskStatusText.TASK_STATUS_ORDER_CANCEL_TEXT,
            }
        case ORDER_TASK_STATUS_NUMBERS.TASK_CANCEL:
            return {
                STATUS_TEXT: taskStatusText.TASK_STATUS_TASK_CANCEL_TEXT,
            }

    }
}
