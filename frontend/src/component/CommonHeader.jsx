import React, {Fragment} from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    backgroud-color:#00695f;
    width:100%;
    color:black;
`;

const Logo = styled.div`
    font-size:25px;
    font-Color:White;
    margin-top:1%;
    margin-right:1%;
    margin-left:1%;
    margin-bottom:1%;
`;


export const CommonHeader =() => {
    return (
      <Fragment>
        <HeaderWrapper>
        <Logo>
          Near-Eats
        </Logo>
        </HeaderWrapper>
      </Fragment>
    )
}