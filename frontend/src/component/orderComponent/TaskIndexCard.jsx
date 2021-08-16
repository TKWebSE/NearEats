import React, {Fragment, useEffect, useReducer,useContext} from 'react';
import styled from "styled-components";
import {TaskState,TaskDispatch} from "../../context/Context";
import {TaskIndexText} from "../../constants";


const TaskIndexCardWrapper = styled.div`
border: solid;
border-color: #F0F0F0 ;
`;


const FoodNameWrapper = styled.div`
`;

const FoodPriceWrapper = styled.div`
`;

const FinishedWrapper = styled.div`
`;

const TasKUodateTextWrapper = styled.div`
`;

const TaskUpdateTimeWrapper = styled.div`
`;


const UnFinishedWrapper = styled.div`
`;

const TaskCreateTextWrapper = styled.div`
`;

const TaskCreateTimeWrapper = styled.div`
`;

export const MyTaskIndexCard = (task) => {
  const state = useContext(TaskState);
  const dispatch = useContext(TaskDispatch)
  console.log(task)
  return (
    <Fragment>
      <TaskIndexCardWrapper>
        <FoodNameWrapper>
          {task.name}
        </FoodNameWrapper>
        <FoodPriceWrapper>
          {task.price}
        </FoodPriceWrapper>
        {
          task.order_status === 1?
            <FinishedWrapper>
              <TasKUodateTextWrapper>
                {TaskIndexText.TasKUpdateText}
              </TasKUodateTextWrapper>
              <TaskUpdateTimeWrapper>
                {task.updated_at}
              </TaskUpdateTimeWrapper>
            </FinishedWrapper>
          :
            <UnFinishedWrapper>
              <TaskCreateTextWrapper>
                {TaskIndexText.TaskCreateText}
              </TaskCreateTextWrapper>
              <TaskCreateTimeWrapper>
                {task.created_at}
              </TaskCreateTimeWrapper>
            </UnFinishedWrapper> 
        }
      </TaskIndexCardWrapper>
    </Fragment>
  )
}