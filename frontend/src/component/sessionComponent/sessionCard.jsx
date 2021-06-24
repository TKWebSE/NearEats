import React ,{Fragment} from "react";
import { MaterialUIUserPasswordLine } from "../userComponent/MaterialUIUserPasswordLine";
import {MaterialUISetEmailLine} from "./MaterialUISetEmailLine";

export const signInCard = () => {

    return (
        <Fragment> 
            <MaterialUISetEmailLine></MaterialUISetEmailLine>
        </Fragment>
    )
}