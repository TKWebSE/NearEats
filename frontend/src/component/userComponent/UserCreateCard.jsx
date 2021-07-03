import React, {Fragment} from "react";
import styled from "styled-components";
import {MaterialUIUserNameLine} from "./MaterialUIUserNameLine";
import {MaterialUIUserEmailLine} from "../userComponent/MaterialUIUserEmailLine";
import {MaterialUIUserPasswordLine} from "../userComponent/MaterialUIUserPasswordLine";
import {MaterialUISetPasswordConfirmationLine} from "../userComponent/MaterialUISetPasswordConfirmationLine";

const UserCreateWrapper = styled.div`
`;

const CreatetUserNameWrapper = styled.div`

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
                    <MaterialUIUserEmailLine> </MaterialUIUserEmailLine>
                </CreatetUserEmailWrapper>
                <CreatetUserPasswordWrapper>
                    <MaterialUIUserPasswordLine></MaterialUIUserPasswordLine>
                </CreatetUserPasswordWrapper>
                <CreatetUserPasswordComfirmationWrapper>
                    <MaterialUISetPasswordConfirmationLine></MaterialUISetPasswordConfirmationLine>
                </CreatetUserPasswordComfirmationWrapper>
            </UserCreateWrapper>
        </Fragment>
    )
}