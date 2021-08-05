import React, {Fragment, useEffect, useReducer,useContext} from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router-dom";
import {SessionState,SessionDispatch} from "../context/Context";
import { fetchMyFoodsIndex } from '../apis/foodApis';
import { REQUEST_STATE ,FOOD_HEADER_TITLE} from '../constants';
import { 
    initializeState,
    foodsListActionTypes,
    foodsListReducer,
} from '../reducer/foodsListReducer';
import {FoodCard} from '../component/foodComponent/FoodCard';
import Cookies from "js-cookie";
import {MYFOODS_TEXT} from "../constants";
import NotFoundCat from "../images/NotFoundCat.jpeg";
import {MaterialUICommonButton} from "../component/MaterialUICommonButton";
import {foodCreateURL} from "../urls/index";
import {ButtonTheme} from "../style_constants";

const FoodsWrapper = styled.div`
    display: inline-block
    float:left;
    margin-right:10%;
    margin-left:10%;
    margin-top:5%;
`;

const FoodsIndexTitle = styled.h2`
    margin-top:0px;
    font-size:180%;
    ${media.lessThan("large")`
        font-size:160%;
    `}
    ${media.lessThan("medium")`
        font-size:130%;
    `}
`;

const ContentsList = styled.div`
    display: flex;
    justify-content: space-around;
    float:left;
    width:23%;
    margin-left:1%;
    margin-right:1%;
    ${media.lessThan("medium")`
        width:30%;
    `}
    ${media.lessThan("small")`
        width:48%;
    `}
`;

const FoodCards = styled(FoodCard)`
    display: inline-block
    float:left;
`;

const NoFoodsListWrapper = styled.div`
    padding-top:5%;
    padding-left:26%;
    position:relative;
    ${media.lessThan("medium")`
        padding-left:14%;
    `}
    ${media.lessThan("small")`
        padding-left:0%;
    `}
`;

const NotFoundCatWrapper = styled.div`

`;

const NotFoundCatImage = styled.img`
    ${media.lessThan("small")`
        width:120%;
    `}
`;

const NoUploadFoodsWrapper = styled.h3`
    position:absolute;
    top: 50%;
    left: 30%;
    ${media.lessThan("large")`
        left:32%;
    `}
    ${media.lessThan("medium")`
        left:20%;
    `}
    ${media.lessThan("small")`
        left:5%;
    `}
`;

const LetsUploadFoodsWrapper = styled.h3`
    position:absolute;
    top: 60%;
    left: 30%;
    ${media.lessThan("large")`
        left:32%;
    `}
    ${media.lessThan("medium")`
        left:20%;
    `}
    ${media.lessThan("small")`
        left:5%;
    `}
`;

const GotoFoodCreateWrapper = styled.div`
    position:absolute;
    top: 80%;
    left: 37%;
    ${media.lessThan("large")`
        left:40%;
    `}
    ${media.lessThan("medium")`
        left:34%;
    `}
    ${media.lessThan("small")`
        left:25%;
    `}
`;

export const MyTaskIndex = () => {
    const [state,dispatch] = useReducer(foodsListReducer,initializeState);
    const history = useHistory();
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch)

    useEffect(() => {
        dispatch({type: foodsListActionTypes.FETCHING})
        fetchMyFoodsIndex(
            SessionAuthState.currentUser.id
            )
        .then((data) => {
            dispatch({
                type: foodsListActionTypes.FETCH_SUCCESS,
                payload: {
                    foodsList: data.foods
                },
            });
        })
        .catch((e) => console.log(e))
    },[])

    function gotoFoodCreateHandle() {
        history.push(foodCreateURL);
    }

    return (
        <Fragment>
            <FoodsWrapper>
                <FoodsIndexTitle>
                    {FOOD_HEADER_TITLE.MYFOOD}
                </FoodsIndexTitle>
                {
                state.fetchState === REQUEST_STATE.OK?
                    state.foodsList === undefined || state.foodsList === []?
                        <NoFoodsListWrapper>
                            <NotFoundCatWrapper>
                                <NotFoundCatImage src={NotFoundCat}/>
                            </NotFoundCatWrapper>
                            <NoUploadFoodsWrapper>
                                {MYFOODS_TEXT.NOT_UPLOAD_MYFOODS_TEXT}
                            </NoUploadFoodsWrapper>
                            <LetsUploadFoodsWrapper>
                                {MYFOODS_TEXT.LETS_UPLOAD_FOOD_TEXT}
                            </LetsUploadFoodsWrapper>
                            <ThemeProvider theme={ButtonTheme}>
                            <GotoFoodCreateWrapper>
                                <MaterialUICommonButton onClick={() => gotoFoodCreateHandle()} btnLabel={MYFOODS_TEXT.GOTO_FOOD_CREATE_BUTTON_LABEL}></MaterialUICommonButton>
                            </GotoFoodCreateWrapper>
                            </ThemeProvider>
                        </NoFoodsListWrapper>
                    :
                    state.foodsList.map((food,i) => 
                        <ContentsList key={i}>
                            <Fragment>
                                <FoodCard food={food}></FoodCard>
                            </Fragment>
                        </ContentsList>
                    )
                :
                <ContentsList>
                    <Fragment>
                        <Skeleton variant="rect" width={450} height={300} />
                        <Skeleton variant="rect" width={450} height={300} />
                        <Skeleton variant="rect" width={450} height={300} />
                    </Fragment>
                </ContentsList>
               }
            </FoodsWrapper>
        </Fragment>
    )
}