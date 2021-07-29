import React,{Fragment,useEffect, useReducer,Link} from "react";
import styled from "styled-components";
import media from "styled-media-query";
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
    padding-bottom:20%;
`;

const MainTextWrapper = styled.div`
    position:absolute;
    top: 20%;
    left: 20%;
    ${media.lessThan("medium")`
        top:10%;
    `}
`;

const TitleWrapper = styled.h1`
    margin-bottom:3%;
    font-size:500%;
    color:white;
    text-shadow:1px 1px 0 black;
    opacity: 0.7;
    ${media.lessThan("medium")`
        margin-bottom:1%;
        font-size:250%;
    `}
    ${media.lessThan("small")`
        margin-bottom:1%;
        font-size:250%;
        opacity: 0.5;
    `}

`;

const SubTitleWrapper = styled.div`
    padding-top:5%;
    font-size:200%;
    color:white;
    text-shadow:1px 1px 0 black;
    opacity: 0.7;
    ${media.lessThan("small")`
        margin-bottom:1%;
        font-size:100%;
        opacity: 0.5;
    `}
`;

const SignUpWrapper = styled.div`
    padding-top:20%;
    font-size: 20%;
    ${media.lessThan("small")`
        padding-top:10%;
        font-size: 20%;
    `}
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
    function GetWindowSize () {
        var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        console.log(x)
        switch(x){
            case x <= 450:
                console.log(x)
                 return {small:"small"}
            case x <=768:
                return {large:"large"}
            case x <= 1170:
                return {midium:"midium"}
            case x  > 1170:
                return {huge:"huge"}
            default:
                throw Error();
        }
    }
    console.log(GetWindowSize())

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
                            <MaterialUICommonButton size="small" onClick={() => signUpHandle()} btnLabel={HOME_TEXT.SOGNUP_BUTTON_LABEL}></MaterialUICommonButton>
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