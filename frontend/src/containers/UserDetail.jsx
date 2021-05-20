import React, {Fragment,useReducer,seContext} from 'react';
import { initializeState } from '../reducer/userReducer';
import {userShow} from "../urls/index";

export const UserDetail = () => { 
  const [state,reducer] = useReducer(reducer,initializeState);

  return (
    <Fragment>
     sampleBページ
    </Fragment>
  )
}