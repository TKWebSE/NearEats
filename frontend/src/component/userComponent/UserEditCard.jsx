import react, { Fragment } from "react";
import styled from "styled-components";
import { MaterialUIUserNameLine } from "../userComponent/MaterialUIUserNameLine";
import { MaterialUIUserAddressLine } from "../userComponent/MaterialUIUserAddressLine";
import { MaterialUIUserEmailLine } from "./MaterialUIUserEmailLine";
import { MaterialUIUserPasswordLine } from "../userComponent/MaterialUIUserPasswordLine";
const UserEditWrapper = styled.div`
`;

const EditUserNameWrapper = styled.div`
`;

const EditUserAddressWrapper = styled.div`
`;

export const UserEditCard = () => {
    return (
        <Fragment>
            <EditUserNameWrapper>
                <MaterialUIUserNameLine></MaterialUIUserNameLine>
            </EditUserNameWrapper>
            <EditUserAddressWrapper>
                <MaterialUIUserAddressLine></MaterialUIUserAddressLine>
            </EditUserAddressWrapper>
        </Fragment>
    )
}
