import { Fragment, useEffect, useContext } from "react"
import media from "styled-media-query";
import styled from "styled-components";
import { useHistory } from "react-router";
import { BUY_POINT_MENU_TEXT } from "../constants";
import { stripeProductionIndexApi, stripeCheckoutApi } from "../apis/stripeApis";
import {
  useLocation,
} from 'react-router-dom';
import Point100Image from "../images/Point100Image.jpg";
import Point500Image from "../images/Point500Image.jpg";
import Point1000Image from "../images/Point1000Image.jpg";
import Point2000Image from "../images/Point2000Image.jpg";
import Point5000Image from "../images/Point5000Image.jpg";
import Point10000Image from "../images/Point10000Image.jpg";
import { MessageState, MessageDispatch } from '../context/Context';
import { messageActionTypes } from "../reducer/messageReducer";

const Wrapper = styled.div`
  margin-left:10%;
  margin-right:10%;
`;

const TitleWrapper = styled.h1`
float:left;

`;

const ContentsWrapper = styled.div`
clear: left;`;

const ContentWrapper = styled.div`
float:left;
width:30%;
padding:1% 1% 1% 1%;
// border: solid;
// margin-bottom:1%;
// padding-left:1%;
// padding-right:1%;
// border-color: grey;
// border-radius:1%;
// ${media.lessThan("medium")`
// width:30%;
// `}
// ${media.lessThan("small")`
// width:100%;
// `}
`;

const ContetnImgWrapper = styled.div`
`;

const ContentImg = styled.img`
width:100%;
border-radius:5%;
${media.lessThan("medium")`
width:30%;
`}
${media.lessThan("small")`
width:100%;
`}
`;

const BuyPointListWrapper = styled.div``;


export const BuyPointMenu = () => {
  const history = useHistory();
  const messageState = useContext(MessageState);
  const messageDispatch = useContext(MessageDispatch);
  const search = useLocation().search;
  const query = new URLSearchParams(search);

  useEffect(() => {
    if (query.get('success')) {
      messageDispatch({
        type: messageActionTypes.SET_MESSAGE,
        payload: {
          message: BUY_POINT_MENU_TEXT.COMPLETE_BUY_POINT_TEXT
        },
      })
    }
    if (query.get('canceled')) {
      messageDispatch({
        type: messageActionTypes.SET_MESSAGE,
        payload: {
          message: BUY_POINT_MENU_TEXT.NOT_COMPLETE_BUY_POINT_TEXT
        },
      })
    }

  }, [])

  const contetsList = [
    { name: "100P", price: 500, img: Point100Image, priceID: "price_1KNB62LVJytCiVtmnJRT3pN9" },
    { name: "500P", price: 500, img: Point500Image, priceID: "price_1KGNUJLVJytCiVtmq477brLC" },
    { name: "1000P", price: 1000, img: Point1000Image, priceID: "price_1KJJj7LVJytCiVtmiyRAv7e0" },
    { name: "2000P", price: 2000, img: Point2000Image, priceID: "price_1KNB73LVJytCiVtmHixZom1j" },
    { name: "5000P", price: 5000, img: Point5000Image, priceID: "price_1KNB7WLVJytCiVtmEOxiZR7l" },
    { name: "10000P", price: 10000, img: Point10000Image, priceID: "price_1KNB82LVJytCiVtmI7avZi6t" },
  ]

  function handleSubmit(priceID) {
    stripeCheckoutApi(priceID)
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
        <BuyPointListWrapper>
          <ContentsWrapper>
            {
              contetsList.map((content, i) =>
                <ContentWrapper key={i} onClick={() => { handleSubmit(content.priceID) }}>
                  <ContetnImgWrapper>
                    <ContentImg src={content.img} />
                  </ContetnImgWrapper>
                </ContentWrapper>
              )
            }
          </ContentsWrapper>
        </BuyPointListWrapper>

      </Wrapper>
    </Fragment >
  )
}
