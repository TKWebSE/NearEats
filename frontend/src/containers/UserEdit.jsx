import React, { Fragment,useReducer,useEffect } from "react";
import styled from "styled-components";
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router";
import { fetchUserApi } from "../apis/userApis";
import { REQUEST_STATE, USER_HEADER_TITLE } from "../constants";
import {initializeState,userEditActionTypes,userEditReducer} from "../reducer/useEditReducer";
import {userDetailHistory} from "../urls/index";
import { ThemeProvider } from '@material-ui/core/styles';
import {UserEditCard} from "../component/userComponent/UserEditCard";
import {ButtonTheme} from "../style_constants";
import {SaveButton} from "../component/MaterialUISaveButton";
import { UserDispatch,UserState } from '../context/Context';


const FoodEditHeader = styled.div`
`;

const UserEditCardWrapper = styled.div`
`;

export const UserEdit = ({match}) => {
    const [state,dispatch] = useReducer(userEditReducer,initializeState);
    const history = useHistory();

    useEffect(() => {
        dispatch({type:userEditActionTypes.FETCHING});
        fetchUserApi(match.params.userId)
        .then((data) => {
            console.log(state)
            dispatch({
                type:userEditActionTypes.FETCH_SUCCESS,
                payload:{
                    user:data.user
                },
            })
        })
        .catch(e => console.log(e));
    },[]);
    
    function submitHandle() {
        history.push(userDetailHistory(state.user.id))
    }

    return (
        <Fragment>
            <FoodEditHeader>
                {USER_HEADER_TITLE.USER_EDIT}
            </FoodEditHeader>
            {
            REQUEST_STATE.OK === state.fetchState?
                <Fragment>
                    <UserEditCardWrapper>
                        <UserDispatch.Provider value={UserDispatch}>
                            <UserState.Provider value={UserState}>
                                <UserEditCard/>
                            </UserState.Provider>
                        </UserDispatch.Provider>   
                    </UserEditCardWrapper>
                    <ThemeProvider theme={ButtonTheme}>
                        <SaveButton onClick={submitHandle} />
                    </ThemeProvider>
                </Fragment>
            :
                <Fragment>
                    <Skeleton variant="rect" width={450} height={300} />
                </Fragment>
            } 
        </Fragment>
    )
}