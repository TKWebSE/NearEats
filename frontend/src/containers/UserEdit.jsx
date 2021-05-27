import React, { Fragment,useReducer,useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { fetchUserApi } from "../apis/userApis";
import { REQUEST_STATE, USER_HEADER_TITLE } from "../constants";
import {initializeState,userEditActionTypes,userEditReducer} from "../reducer/useEditReducer";

const FoodEditHeader = styled.div`
`;

export const UserEdit = ({match}) => {
    const [state,dispatch] = useReducer(userEditReducer,initializeState);
    const history = useHistory();

    useEffect(() => {
        dispatch({type:userEditActionTypes.FETCHING});
        fetchUserApi(match.params.userId)
        .then((data) => {
            dispatch({
                type:userEditActionTypes.FETCH_SUCCESS,
                payload:
                    {user:data.user},
            })
        })
        .catch(e => console.log(e));
    },[]);

    function onSubmit() {
        history.push()
    }

    return (
        <Fragment>
            <FoodEditHeader>
                {USER_HEADER_TITLE.USER_EDIT}
            </FoodEditHeader>
            {
            REQUEST_STATE.OK === state.fetchState?
                <Fragment>
                    <EditUserNameWrapper>

                    </EditUserNameWrapper>
                    <EditUserAddressWrapper>

                    </EditUserAddressWrapper>
                </Fragment>
            :
                <Fragment>
                    <Skeleton variant="rect" width={450} height={300} />
                </Fragment>
            } 
        </Fragment>
    )
}