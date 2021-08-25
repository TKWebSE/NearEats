import {TASK_TEXT} from "../../constants";

export const taskStatusText = (order_status) => {
  console.log(order_status)
  const STATUS_TEXT = []
  
  switch (order_status){
      case "1":
          return{
              STATUS_TEXT:TASK_TEXT.TASK_STATUS_UNFINISHED_TIME_TEXT,
          }
      case "2":
          return{
              STATUS_TEXT:TASK_TEXT.TASK_STATUS_FINISHED_TIME_TEXT,
          }
      case "3":
          return {
              STATUS_TEXT:TASK_TEXT.TASK_STATUS_ORDER_CANCEL_TIME_TEXT,
          }
      case "4":
          return {
              STATUS_TEXT:TASK_TEXT.TASK_STATUS_TASK_CANCEL_TIME_TEXT,
          }
  }
}
