import React, {Fragment, useEffect} from "react";
import styled from "styled-components";

import FoodCreateCard from "./FoodCreateCard";

const FoodCreateHeader = styled.h1`
    margin-top:3%;
    margin-bottom:3%;
`;

export class FoodCreate extends Component {
    constructor (props){
        super(props);
        neko:"nekoko"
    }
    
    useEffect(() => {
        console.log(neko);
    },[]);

    return(
        
        <Fragment>
            <FoodCreateWrappwer>
                <FoodCreateHeader>
                    料理作成画面
                </FoodCreateHeader>
                <FoodCreateCard/>
            </FoodCreateWrappwer>
        </Fragment>
    )
}