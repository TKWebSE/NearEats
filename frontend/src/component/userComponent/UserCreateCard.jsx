import React, {Fragment} from "react";
import styled from "styled-components";
import {MaterialUIUserNameLine} from "./MaterialUIUserNameLine";
import {MaterialUISetEmailLine} from "../sessionComponent/MaterialUISetEmailLine";
import {MaterialUISetPasswordLine} from "../sessionComponent/MaterialUISetPasswordLine";
import {MaterialUIUserPasswordComfirmationLine} from "../sessionComponent/MaterialUISetPasswordComfirmLine";

const UserCreateWrapper = styled.div`
`;

const CreatetUserNameWrapper = styled.div`
margin-bottom:5%;
`;

const CreatetUserEmailWrapper = styled.div`
`;

const CreatetUserPasswordWrapper = styled.div`
`;

const CreatetUserPasswordComfirmationWrapper =styled.div`
`;

export const UserCreateCard = () => {
    return(
        <Fragment>
            <UserCreateWrapper>
                <CreatetUserNameWrapper>
                    <MaterialUIUserNameLine></MaterialUIUserNameLine>
                </CreatetUserNameWrapper>
                <CreatetUserEmailWrapper>
                    <MaterialUISetEmailLine> </MaterialUISetEmailLine>
                </CreatetUserEmailWrapper>
                <CreatetUserPasswordWrapper>
                    <MaterialUISetPasswordLine></MaterialUISetPasswordLine>
                </CreatetUserPasswordWrapper>
                <CreatetUserPasswordComfirmationWrapper>
                    <MaterialUIUserPasswordComfirmationLine></MaterialUIUserPasswordComfirmationLine>
                </CreatetUserPasswordComfirmationWrapper>
            </UserCreateWrapper>
        </Fragment>
    )
}