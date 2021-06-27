import React ,{Fragment} from "react";
import styled from "styled-components";
import { MaterialUIUserPasswordLine } from "../userComponent/MaterialUIUserPasswordLine";
import {MaterialUISetEmailLine} from "./MaterialUISetEmailLine";
import {MaterialUISetPasswordLine} from "./MaterialUISetPasswordLine";

const EmailWrapper = styled.div`
`;

const PasswordWrapper = styled.div`
`;

export const SignInCard = () => {

    return (
        <Fragment> 
            <EmailWrapper>
                <MaterialUISetEmailLine></MaterialUISetEmailLine>
            </EmailWrapper>
            <PasswordWrapper>
                <MaterialUISetPasswordLine></MaterialUISetPasswordLine>
            </PasswordWrapper>
        </Fragment>
    )
}