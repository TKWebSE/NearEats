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

const IsFinishedWrapper = styled.div`
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

export const MyTaskIndexCard = () => {
  const state = useContext(TaskState);
  const dispatch = useContext(TaskDispatch)

  return (
    <Fragment>
      <TaskIndexCardWrapper>
        <FoodNameWrapper>
          {state.food.name}
        </FoodNameWrapper>
        <FoodPriceWrapper>
          {state.price}
        </FoodPriceWrapper>
        <IsFinishedWrapper>
          {state.finished}
        </IsFinishedWrapper>
        {
          state.order_status === 1?
            <FinishedWrapper>
              <TasKUodateTextWrapper>
                {TaskIndexText.TasKUodateText}
              </TasKUodateTextWrapper>
              <TaskUpdateTimeWrapper>
                {state.updatetime}
              </TaskUpdateTimeWrapper>
            </FinishedWrapper>
          :
            <UnFinishedWrapper>
              <TaskCreateTextWrapper>
                {TaskIndexText.TaskCreateText}
              </TaskCreateTextWrapper>
              <TaskCreateTimeWrapper>
                {state.createtime}
              </TaskCreateTimeWrapper>
            </UnFinishedWrapper> 
        }
      </TaskIndexCardWrapper>
    </Fragment>
  )
}