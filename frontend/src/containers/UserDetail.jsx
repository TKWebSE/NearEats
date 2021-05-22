import React, {Fragment,useReducer,seContext, useEffect} from 'react';
import { initializeState } from '../reducer/userReducer';
import {userShow} from "../urls/index";
import {state,dispatch} from "../context/Context";


const UserWrapper = styled.h1`
`;

const UserDetailWrapper = styled.div`
`;

const UserName = styled.div`
`;

export const UserDetail = () => { 
  const [state,dispatch] = useReducer(reducer,initializeState);

  useEffect(
    dispatch
  )

  return (
    <Fragment>
      <UserDetailWrapper>
        <UserHeaderWrapper>
          {USER_HEADER_TITLE.UserDetail}
        </UserHeaderWrapper>  
      
        <UserName>
          名前領域
        </UserName>
        <Userpoint>
          ポイント領域
        </Userpoint>
        <UserDescription>
          説明領域
        </UserDescription>
    </UserDetailWrapper>  
    </Fragment>
    )
}