import React ,{Fragment} from "react";
import styled from "styled-components";
import { MaterialUIUserPasswordLine } from "../userComponent/MaterialUIUserPasswordLine";
import {MaterialUISetEmailLine} from "./MaterialUISetEmailLine";
import {MaterialUISetPasswordLine} from "../sessionComponent/MaterialUISetPasswordLine";
import {MaterialUISetPasswordComfirmLine} from "../sessionComponent/MaterialUISetPasswordComfirmLine";

const EmailWrapper = styled.div`
`;

const PasswordWrapper = styled.div`
`;

const PasswordConfirmWrapper = styled.div`
`;

export const signInCard = () => {

    return (
        <Fragment> 
            <EmailWrapper>
                <MaterialUISetEmailLine></MaterialUISetEmailLine>
            </EmailWrapper>
            <PasswordWrapper>
                <MaterialUISetPasswordLine></MaterialUISetPasswordLine>
            </PasswordWrapper>
            <PasswordConfirmWrapper>
                <MaterialUISetPasswordComfirmLine></MaterialUISetPasswordComfirmLine>
            </PasswordConfirmWrapper>
        </Fragment>
    )
}