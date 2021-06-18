import React, {Fragment} from "react";
import styled from "styled-components";
import {MaterialUIUserNameLine} from "./MaterialUIUserNameLine";
import {MaterialUuserAEmailLine} from "./MaterialUIUserEmailLine";

const UserCreateWrapper = styled.div`
`;

export const UserCreateCard = () => {
    return(
        <Fragment>
            <UserCreateWrapper>
                {/* <MaterialUIUserNameLine></MaterialUIUserNameLine>
                <MaterialUuserAEmailLine>   </MaterialUuserAEmailLine> */}
                
            </UserCreateWrapper>
        </Fragment>
    )
}