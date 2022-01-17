import { Fragment } from "react"
import styled from "styled-components";
import { useHistory } from "react-router";
import { BUY_POINT_MENU_TEXT } from "../constants";
import BuyPointRectangleModalComponent from "../component/PointComponent/BuyPointRectangleModalComponent";
import { CommonReloadButton } from "../component/CommonReloadButton";
import { stripeCheckoutAApi, stripeCheckoutApi } from "../apis/stripeApis";
import point from "../images/point.jpg";

const Wrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const TitleWrapper = styled.h1`
`;

const NowPoint = styled.div``;

const ContentsWrapper = styled.div``;

const ContentWrapper = styled.div``;

const ContetnImgWrapper = styled.div`
`;

const ContentImg = styled.img``;

const NameWrapper = styled.div``;

const PriceWrapper = styled.div``;

const BuyPointListWrapper = styled.div``;

export const BuyPointMenu = () => {
  const history = useHistory();

  const contetsList = [
    { name: "500POINT", price: 500, img: point },
    { name: "1000POINT", price: 1000, img: point },
    { name: "2000POINT", price: 2000, img: point },
    { name: "5000POINT", price: 5000, img: point },
    { name: "10000POINT", price: 10000, img: point },
  ]

  function handleSubmit() {
    stripeCheckoutApi()
      .then((data) => {

        window.location.replace(data.url)
      })
  }

  return (
    <Fragment>
      <Wrapper>
        <TitleWrapper>
          {BUY_POINT_MENU_TEXT.TITLE}
        </TitleWrapper>
        <NowPoint>{BUY_POINT_MENU_TEXT.NOW_POINT}</NowPoint>
        <BuyPointListWrapper>
          <ContentsWrapper>
            {
              contetsList.map((content, i) =>
                <ContentWrapper key={i}>
                  <ContetnImgWrapper>
                    <ContentImg src={content.point} />
                  </ContetnImgWrapper>
                  <NameWrapper>
                    {content.name}
                  </NameWrapper>
                  <PriceWrapper>
                    {content.price}
                  </PriceWrapper>
                </ContentWrapper>
              )
            }
          </ContentsWrapper>
          <CommonReloadButton
            onClick={handleSubmit}
            btnLabel={"購入する"}
          />
        </BuyPointListWrapper>

      </Wrapper>
    </Fragment >
  )
}
