import react, { Fragment } from "react";
import styled from "styled-components";
import { TextFieldInReducer } from "../TextFieldInReducer";
import { LocationMultiSelect } from "./LocationMultiSelect";
import { USER_EDIT } from "../../constants";
import { userActionTypes } from "../../reducer/userReducer";

const EditUserWrapper = styled.div`
    text-align:left;
`;

const EditUserNameWrapper = styled.div`
margin-bottom:1%;
`;

const EditUserAddressWrapper = styled.div`
margin-bottom:1%;
`;

const EditCityTextWrapper = styled.div`
margin-left:1%;
`;

const EditUserCityWrapper = styled.div`
margin-left:2%;
margin-bottom:2%;
`;

export const UserEditCard = ({ state, dispatch, onKeyDown }) => {
    console.log(state)
    console.log(state.user)
    console.log(state.user.name)
    return (
        <Fragment>
            <EditUserWrapper>
                <EditUserNameWrapper>
                    <TextFieldInReducer label={USER_EDIT.USER_NAME_LABEL} value={state.user.name} dispatch={dispatch} actionType={userActionTypes.SETTINGUSERNAME} onKeyDown={onKeyDown}></TextFieldInReducer>
                </EditUserNameWrapper>
                <EditUserAddressWrapper>
                    <TextFieldInReducer label={USER_EDIT.USER_NAME_LABEL} value={state.user.address} dispatch={dispatch} actionType={userActionTypes.SETTINGUSERADDRESS} onKeyDown={onKeyDown}></TextFieldInReducer>
                </EditUserAddressWrapper>
                <EditCityTextWrapper>
                    {USER_EDIT.NOWLOCATION_PLACEHOLDER_TEXT}
                </EditCityTextWrapper>
                <EditUserCityWrapper>
                    <LocationMultiSelect />
                </EditUserCityWrapper>
            </EditUserWrapper>
        </Fragment>
    )
}
