import React, {Fragment, useEffect, useReducer,useContext} from 'react';
import styled from "styled-components";

import {TaskIndexText} from "../../constants";


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
  
  return (
    <Fragment>
      <FoodNameWrapper>
    
      </FoodNameWrapper>
      <FoodPriceWrapper>
        
      </FoodPriceWrapper>
      <IsFinishedWrapper>

      </IsFinishedWrapper>
      {
        isFinished?
          <FinishedWrapper>
            <TasKUodateTextWrapper>
              {TaskIndexText.TasKUodateText}
            </TasKUodateTextWrapper>
            <TaskUpdateTimeWrapper>

            </TaskUpdateTimeWrapper>
          </FinishedWrapper>
        :
          <UnFinishedWrapper>
            <TaskCreateTextWrapper>
              {TaskIndexText.TaskCreateText}
            </TaskCreateTextWrapper>
            <TaskCreateTimeWrapper>

            </TaskCreateTimeWrapper>
          </UnFinishedWrapper> 
      }
    </Fragment>
  )
}