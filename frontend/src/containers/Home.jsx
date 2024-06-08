import React, { Fragment } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { ThemeProvider } from '@material-ui/core/styles';
import { MaterialUICommonButton } from "../component/MaterialUICommonButton";
import { ButtonTheme } from "../style_constants";
import { useHistory } from "react-router-dom";
import { guestCreateURL, signInURL } from "../urls/index";
import { HOME_TEXT } from "../constants";
import homeMainImage from "../images/home-main-image.jpg";
import menu1 from "../images/menu1.jpg";
import menu2 from "../images/menu2.jpg";
import menu3 from "../images/menu3.jpg";
import menu4 from "../images/menu4.jpg";
import cook1 from "../images/cook1.jpg";
import cook2 from "../images/cook2.jpg";
import cook3 from "../images/cook3.jpg";
import cook4 from "../images/cook4.jpg";
import howto1 from "../images/howto1.jpg";
import howto2 from "../images/howto2.jpg";
import howto3 from "../images/howto3.jpg";

const HomeWrapper = styled.div`
`;

const MainWrapper = styled.div`
    position:relative;
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
    padding-top:10%;
    font-size: 20%;
    ${media.lessThan("medium")`
        padding-top:5%;
        // font-size:250%;
    `}
    ${media.lessThan("small")`
        padding-top:3%;
        // font-size: 20%;
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
    padding-top:5%;
    padding-left:20%;
    padding-right:20%;
`;

const BuyerWrapper = styled.div`
`;

const MenuImageWrapper = styled.div`
`;

const MenuImage = styled.img`
    width:50%;
`;

const BuyerTitleWrapper = styled.h1`

    ${media.lessThan("small")`
        padding-top:0%;
        font-size: 200%;
    `}
`;

const BuyerTextWrapper = styled.div`
    padding-bottom:1%;
`;

const SellerWrapper = styled.div`
`;

const SellerTitleWrapper = styled.h1`
`;

const SellerTextWrapper = styled.div`
    padding-bottom:1%;
`;

const CookImageWrapper = styled.div`
`;

const CookImage = styled.img`
    width:50%;
`;

const HowToWrapper = styled.div`
    padding-top:5%;
    padding-left:20%;
    padding-right:20%;
    padding-bottom:10%;
`;

const HowToTitleWrapper = styled.h1`
    ${media.lessThan("small")`
        font-size:160%;
    `}
`;

const HowToUploadWrapper = styled.div`
`;

const HowToUploadTitle = styled.h2`
`;

const HowToUploadText = styled.div`
    padding-bottom:1%;
`;

const HowToUploadImageWrapper = styled.div`
`;

const HowToUploadImage = styled.img`
    width:100%;
`;

const HowToGetTaskAndCookWrapper = styled.div`
`;

const HowToGetTaskAndCookTitle = styled.h2`
`;

const HowToGetTaskAndCookText = styled.div`
    padding-bottom:1%;
`;

const HowToGetTaskAndCookImageWrapper = styled.div`
`;

const HowToGetTaskAndCookImage = styled.img`
    width:100%;
`;

const HowToDeliverFoodWrapper = styled.div`
`;

const HowToDeliverFoodTitle = styled.h2`
`;

const HowToDeliverFoodText = styled.div`
    padding-bottom:1%;
`;

const HowToDeliverFoodImageWrapper = styled.div`
`;

const HowToDeliverFoodImage = styled.img`
    width:100%;
`;

export const Home = () => {
    const history = useHistory();

    function signUpHandle() {
        history.push(guestCreateURL)
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
                        <BuyerTitleWrapper>
                            {HOME_TEXT.BUYER_TITLE}
                        </BuyerTitleWrapper>
                        <BuyerTextWrapper>
                            {HOME_TEXT.BUYER_TEXT}
                        </BuyerTextWrapper>
                        <MenuImageWrapper>
                            <MenuImage src={menu1} alt="menuFirstImage"></MenuImage>
                            <MenuImage src={menu2} alt="menuSecondImage"></MenuImage>
                            <MenuImage src={menu3} alt="menuThirdImage"></MenuImage>
                            <MenuImage src={menu4} alt="menuForthImage"></MenuImage>
                        </MenuImageWrapper>
                    </BuyerWrapper>
                    <SellerWrapper>
                        <SellerTitleWrapper>
                            {HOME_TEXT.SELLER_TITLE}
                        </SellerTitleWrapper>
                        <SellerTextWrapper>
                            {HOME_TEXT.SELLER_TEXT}
                        </SellerTextWrapper>
                        <CookImageWrapper>
                            <CookImage src={cook1} alt="cookFirstImage" />
                            <CookImage src={cook2} alt="cookSecondImage" />
                            <CookImage src={cook3} alt="cookThirdImage" />
                            <CookImage src={cook4} alt="cookForthImage" />
                        </CookImageWrapper>

                    </SellerWrapper>
                </ServiceWrapper>
                <HowToWrapper>
                    <HowToTitleWrapper>
                        {HOME_TEXT.HOWTO_TITLE}
                    </HowToTitleWrapper>
                    <HowToUploadWrapper>
                        <HowToUploadTitle>
                            {HOME_TEXT.HOWTO_UPLOAD_TITLE}
                        </HowToUploadTitle>
                        <HowToUploadText>
                            {HOME_TEXT.HOWTO_UPLOAD_TEXT}
                        </HowToUploadText>
                        <HowToUploadImageWrapper>
                            <HowToUploadImage src={howto1} alt="howToImageFirst" />
                        </HowToUploadImageWrapper>
                    </HowToUploadWrapper>
                    <HowToGetTaskAndCookWrapper>
                        <HowToGetTaskAndCookTitle>
                            {HOME_TEXT.HOWTO_GETTASK_AND_COOK_TITLE}
                        </HowToGetTaskAndCookTitle>
                        <HowToGetTaskAndCookText>
                            {HOME_TEXT.HOWTO_GETTASK_AND_COOK_TEXT}
                        </HowToGetTaskAndCookText>
                        <HowToGetTaskAndCookImageWrapper>
                            <HowToGetTaskAndCookImage src={howto2} alt="howToImageSecond" />
                        </HowToGetTaskAndCookImageWrapper>
                    </HowToGetTaskAndCookWrapper>
                    <HowToDeliverFoodWrapper>
                        <HowToDeliverFoodTitle>
                            {HOME_TEXT.HOWTO_DELIVER_FOOD_TITLE}
                        </HowToDeliverFoodTitle>
                        <HowToDeliverFoodText>
                            {HOME_TEXT.HOWTO_DELIVER_FOOD_TEXT}
                        </HowToDeliverFoodText>
                        <HowToDeliverFoodImageWrapper>
                            <HowToDeliverFoodImage src={howto3} alt="howToImageThord" />
                        </HowToDeliverFoodImageWrapper>
                    </HowToDeliverFoodWrapper>
                </HowToWrapper>
            </HomeWrapper>
        </Fragment>
    )
}
