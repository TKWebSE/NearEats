import React,{Fragment,useEffect, useReducer,Link} from "react";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import {MaterialUICommonButton} from "../component/MaterialUICommonButton";
import {ButtonTheme} from "../style_constants";
import {useHistory} from "react-router-dom";
import {userCreateURL,signInURL} from "../urls/index";
import {HOME_TITLE} from "../constants";
import homeMainImage from "../images/home-main-image.jpg";

const HomeWrapper = styled.div`
    margin-left:20%;
    margin-right:20%;
`;
const LeftSideWrapper = styled.div`
float:left;
`;


const TitleWrapper = styled.h1`
    margin-top:3%;
    margin-bottom:3%;

`;

const SubTitleWrapper = styled.div`
`;

const SignUpWrapper = styled.div`
`;

const SignInWrapper = styled.div`

`;

const ImgWrapper = styled.div`
float:left;
`;

const HomeMainImage = styled.img`
 width:800px;
 height:550px;
    margin-bottom:2%;
`;


export const Home = ()=> {
    const history = useHistory();

    function signUpHandle() {
        history.push(userCreateURL)
    }

    function signInHandle() {
        history.push(signInURL)
    }

    return (
        <Fragment>
            <HomeWrapper>
                <LeftSideWrapper>
                    <TitleWrapper>
                        {HOME_TITLE.HOME_TITLE}
                    </TitleWrapper>
                    <SubTitleWrapper>
                        {HOME_TITLE.SUB_TITLE}
                    </SubTitleWrapper>
                    <ThemeProvider theme={ButtonTheme}>
                        <SignUpWrapper>
                            <MaterialUICommonButton onClick={() => signUpHandle()} btnLabel={HOME_TITLE.SOGNUP_BUTTON_LABEL}></MaterialUICommonButton>
                        </SignUpWrapper>
                        <SignInWrapper>
                        <MaterialUICommonButton onClick={() => signInHandle()} btnLabel={HOME_TITLE.SIGNIN_BUTTON_LABEL}></MaterialUICommonButton>
                        </SignInWrapper>
                    </ThemeProvider>
                </LeftSideWrapper>
                <ImgWrapper>
                    <HomeMainImage src={homeMainImage} alt="homeMainImage"></HomeMainImage>
                </ImgWrapper>
            </HomeWrapper>
        </Fragment>
    )
}