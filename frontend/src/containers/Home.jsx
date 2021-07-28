import React,{Fragment,useEffect, useReducer,Link} from "react";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import {MaterialUICommonButton} from "../component/MaterialUICommonButton";
import {ButtonTheme} from "../style_constants";
import {useHistory} from "react-router-dom";
import {userCreateURL,signInURL} from "../urls/index";
import {HOME_TEXT} from "../constants";
import homeMainImage from "../images/home-main-image.jpg";
import buyerImage from "../images/buyer-image.jpeg";

const HomeWrapper = styled.div`
`;

const MainWrapper = styled.div`
    position:relative;
`;

const MainTextWrapper = styled.div`
    position:absolute;
    top: 20%;
    left: 20%;
`;

const TitleWrapper = styled.h1`
    margin-bottom:3%;
    font-size:500%;
    color:white;
    text-shadow:1px 1px 0 black;
    opacity: 0.7;
`;

const SubTitleWrapper = styled.div`
    padding-top:5%;
    font-size:200%;
    color:white;
    text-shadow:1px 1px 0 black;
    opacity: 0.7;
`;

const SignUpWrapper = styled.div`
    padding-top:40%;
    font-size: 20%;
`;

const SignInWrapper = styled.div`
    padding-top:2%;
`;

const ImgWrapper = styled.div`
`;

const HomeMainImage = styled.img`
    width:100%;
`;

const ServiceWrapper = styled.div`
    position:absolute;
    top:110%;
    left:20%;
    bottom:20%;
`;

const BuyerWrapper = styled.div`
`;

const BuyerImageWrapper = styled.div`
`;

const BuyerImage = styled.div`
`;

const BuyerTitleWrapper = styled.h1`
`;

const BuyerTextWrapper = styled.div`
`;

const SellerWrapper = styled.div`
`;

const SellerImageWrapper = styled.div`
`;

const SellerTitleWrapper = styled.h1`
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
            <MainWrapper>
                <ImgWrapper>
                    <HomeMainImage src={homeMainImage} alt="homeMainImage"></HomeMainImage>
                </ImgWrapper>
                <MainTextWrapper>
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
                </MainTextWrapper>
            </MainWrapper>
            <ServiceWrapper>
                <BuyerWrapper>
                    <BuyerImageWrapper>
                        <BuyerImage src={buyerImage} alt="buyerImage"></BuyerImage>
                    </BuyerImageWrapper>
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