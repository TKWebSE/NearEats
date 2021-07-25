import React,{Fragment,useEffect, useReducer,Link} from "react";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import {MaterialUICommonButton} from "../component/MaterialUICommonButton";
import {ButtonTheme} from "../style_constants";
import {useHistory} from "react-router-dom";
import {userCreateURL,signInURL} from "../urls/index";
import {HOME_TEXT} from "../constants";
import homeMainImage from "../images/home-main-image.jpg";

const HomeWrapper = styled.div`
    padding-top:5%;
    margin-left:20%;
    margin-right:20%;
`;
const LeftSideWrapper = styled.div`
    padding-top:10%;
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

const ServiceWrapper = styled.div`
clear: left;
`;

const BuyerWrapper = styled.div`
`;

const BuyerImageWrapper = styled.div`
`;

const BuyerTitleWrapper = styled.div`
`;

const BuyerTextWrapper = styled.div`
`;

const SellerWrapper = styled.div`
`;

const SellerImageWrapper = styled.div`
`;

const SellerTitleWrapper = styled.div`
`;

const SellerTextWrapper = styled.div`
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
                        {HOME_TEXT.HOME_TITLE}
                    </TitleWrapper>
                    <SubTitleWrapper>
                        {HOME_TEXT.SUB_TITLE}
                    </SubTitleWrapper>
                    <ThemeProvider theme={ButtonTheme}>
                        <SignUpWrapper>
                            <MaterialUICommonButton onClick={() => signUpHandle()} btnLabel={HOME_TEXT.SOGNUP_BUTTON_LABEL}></MaterialUICommonButton>
                        </SignUpWrapper>
                        <SignInWrapper>
                        <MaterialUICommonButton onClick={() => signInHandle()} btnLabel={HOME_TEXT.SIGNIN_BUTTON_LABEL}></MaterialUICommonButton>
                        </SignInWrapper>
                    </ThemeProvider>
                </LeftSideWrapper>
                <ImgWrapper>
                    <HomeMainImage src={homeMainImage} alt="homeMainImage"></HomeMainImage>
                </ImgWrapper>
                <ServiceWrapper>
                    <BuyerWrapper>
                        <BuyerImageWrapper/>
                        <BuyerTitleWrapper>
                            {HOME_TEXT.BUYER_TITLE}
                        </BuyerTitleWrapper>
                        <BuyerTextWrapper>
                            {HOME_TEXT.BUYER_TEXT}
                        </BuyerTextWrapper>
                    </BuyerWrapper>
                    <SellerWrapper>
                        <SellerImageWrapper/>
                        <SellerTitleWrapper>
                            {HOME_TEXT.SELLER_TITLE}
                        </SellerTitleWrapper>
                        <SellerTextWrapper>
                            {HOME_TEXT.SELLER_TEXT}
                        </SellerTextWrapper>
                    </SellerWrapper>
                </ServiceWrapper>
            </HomeWrapper>
        </Fragment>
    )
}