import React, { Fragment } from "react";
import styled from "styled-components";
import { MaterialUIUserPasswordLine } from "../userComponent/MaterialUIUserPasswordLine";
import { MaterialUISetEmailLine } from "./MaterialUISetEmailLine";
import { MaterialUISetPasswordLine } from "./MaterialUISetPasswordLine";

const EmailWrapper = styled.div`
`;

const PasswordWrapper = styled.div`
`;

export const SignInCard = ({ onKeyDown }) => {

    return (
        <Fragment>
            <EmailWrapper>
                <MaterialUISetEmailLine onKeyDown={(event) => onKeyDown(event)}></MaterialUISetEmailLine>
            </EmailWrapper>
            <PasswordWrapper>
                <MaterialUISetPasswordLine onKeyDown={(event) => onKeyDown(event)}></MaterialUISetPasswordLine>
            </PasswordWrapper>
        </Fragment>
    )
}
