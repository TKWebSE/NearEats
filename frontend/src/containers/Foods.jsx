import React, {Fragment, useEffect, useReducer} from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { fetchFoodsIndexApi } from '../apis/foodApis';
import { REQUEST_STATE ,FOOD_HEADER_TITLE} from '../constants';
import { ThemeProvider } from '@material-ui/core/styles';
import { 
    initializeState,
    foodsListActionTypes,
    foodsListReducer,
} from '../reducer/foodsListReducer';
import {FoodCard} from '../component/foodComponent/FoodCard';
import Cookies from "js-cookie";
import {NOTFOUND_FOOD_TEXT} from "../constants";
import NotFoundCat from "../images/NotFoundCat.jpeg";
import {MaterialUICommonButton} from "../component/MaterialUICommonButton";
import {foodCreateURL} from "../urls/index";
import {ButtonTheme} from "../style_constants";

const FoodsWrapper = styled.div`
    display: inline-block
    float:left;
    margin-top:5%;
    margin-right:10%;
    margin-left:10%;
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

const FoodListWrapper = styled.div`
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
        width:100%;
    `}
`;

const FoodCardWrapper = styled.div`
    width:100%;
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


const SkeltonsWrapper = styled.div`

`;

const SkeltonCardWrapper = styled.div`
margin-left:1%;
width:23%;
margin-right:1%;
padding-bottom:5%;
float: left;
`;

const SkeltonImageWrapper = styled.div`

`;

const SkeltonTitleWrapper = styled.div`
    padding-top:6%;
    
`;

export const Foods = () => {
    const [state,dispatch] = useReducer(foodsListReducer,initializeState);
    const history = useHistory();

    useEffect(() => {
        dispatch({type: foodsListActionTypes.FETCHING})
        fetchFoodsIndexApi()
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
                    {FOOD_HEADER_TITLE.FOOD_INDEX}
                </FoodsIndexTitle>
                {
                state.fetchState === REQUEST_STATE.OK?
                    state.foodsList === undefined || state.foodsList === []?
                    <NoFoodsListWrapper>
                        <NotFoundCatWrapper>
                            <NotFoundCatImage src={NotFoundCat}/>
                        </NotFoundCatWrapper>
                        <NoUploadFoodsWrapper>
                            {NOTFOUND_FOOD_TEXT.NOT_UPLOAD_MYFOODS_TEXT}
                        </NoUploadFoodsWrapper>
                        <LetsUploadFoodsWrapper>
                            {NOTFOUND_FOOD_TEXT.LETS_UPLOAD_FOOD_TEXT}
                        </LetsUploadFoodsWrapper>
                        <ThemeProvider theme={ButtonTheme}>
                        <GotoFoodCreateWrapper>
                            <MaterialUICommonButton onClick={() => gotoFoodCreateHandle()} btnLabel={NOTFOUND_FOOD_TEXT.GOTO_FOOD_CREATE_BUTTON_LABEL}></MaterialUICommonButton>
                        </GotoFoodCreateWrapper>
                        </ThemeProvider>
                    </NoFoodsListWrapper>
                    :
                    <FoodListWrapper>
                    {
                    state.foodsList.map((food,i) => 
                        <ContentsList key={i}>
                            <FoodCardWrapper>
                                <FoodCard food={food}></FoodCard>
                            </FoodCardWrapper>
                        </ContentsList>
                    )
                    }
                    </FoodListWrapper>
                :
                <SkeltonsWrapper>
                <SkeltonCardWrapper>
                    <SkeltonImageWrapper>
                        <Skeleton variant="rect" height={180}/>
                    </SkeltonImageWrapper>
                    <SkeltonTitleWrapper>
                        <Skeleton variant="rect" height={40}/>
                    </SkeltonTitleWrapper>
                </SkeltonCardWrapper>
                <SkeltonCardWrapper>
                    <SkeltonImageWrapper>
                        <Skeleton variant="rect" height={180}/>
                    </SkeltonImageWrapper>
                    <SkeltonTitleWrapper>
                        <Skeleton variant="rect" height={40}/>
                    </SkeltonTitleWrapper>
                </SkeltonCardWrapper>
                <SkeltonCardWrapper>
                    <SkeltonImageWrapper>
                        <Skeleton variant="rect" height={180}/>
                    </SkeltonImageWrapper>
                    <SkeltonTitleWrapper>
                        <Skeleton variant="rect" height={40}/>
                    </SkeltonTitleWrapper>
                </SkeltonCardWrapper>
                <SkeltonCardWrapper>
                    <SkeltonImageWrapper>
                        <Skeleton variant="rect" height={180}/>
                    </SkeltonImageWrapper>
                    <SkeltonTitleWrapper>
                        <Skeleton variant="rect" height={40}/>
                    </SkeltonTitleWrapper>
                </SkeltonCardWrapper>
                <SkeltonCardWrapper>
                    <SkeltonImageWrapper>
                        <Skeleton variant="rect" height={180}/>
                    </SkeltonImageWrapper>
                    <SkeltonTitleWrapper>
                        <Skeleton variant="rect" height={40}/>
                    </SkeltonTitleWrapper>
                </SkeltonCardWrapper>
                <SkeltonCardWrapper>
                    <SkeltonImageWrapper>
                        <Skeleton variant="rect" height={180}/>
                    </SkeltonImageWrapper>
                    <SkeltonTitleWrapper>
                        <Skeleton variant="rect" height={40}/>
                    </SkeltonTitleWrapper>
                </SkeltonCardWrapper>
                <SkeltonCardWrapper>
                    <SkeltonImageWrapper>
                        <Skeleton variant="rect" height={180}/>
                    </SkeltonImageWrapper>
                    <SkeltonTitleWrapper>
                        <Skeleton variant="rect" height={40}/>
                    </SkeltonTitleWrapper>
                </SkeltonCardWrapper>
                <SkeltonCardWrapper>
                    <SkeltonImageWrapper>
                        <Skeleton variant="rect" height={180}/>
                    </SkeltonImageWrapper>
                    <SkeltonTitleWrapper>
                        <Skeleton variant="rect" height={40}/>
                    </SkeltonTitleWrapper>
                </SkeltonCardWrapper>
                <SkeltonCardWrapper>
                    <SkeltonImageWrapper>
                        <Skeleton variant="rect" height={180}/>
                    </SkeltonImageWrapper>
                    <SkeltonTitleWrapper>
                        <Skeleton variant="rect" height={40}/>
                    </SkeltonTitleWrapper>
                </SkeltonCardWrapper>
                <SkeltonCardWrapper>
                    <SkeltonImageWrapper>
                        <Skeleton variant="rect" height={180}/>
                    </SkeltonImageWrapper>
                    <SkeltonTitleWrapper>
                        <Skeleton variant="rect" height={40}/>
                    </SkeltonTitleWrapper>
                </SkeltonCardWrapper>
                <SkeltonCardWrapper>
                    <SkeltonImageWrapper>
                        <Skeleton variant="rect" height={180}/>
                    </SkeltonImageWrapper>
                    <SkeltonTitleWrapper>
                        <Skeleton variant="rect" height={40}/>
                    </SkeltonTitleWrapper>
                </SkeltonCardWrapper>
                <SkeltonCardWrapper>
                    <SkeltonImageWrapper>
                        <Skeleton variant="rect" height={180}/>
                    </SkeltonImageWrapper>
                    <SkeltonTitleWrapper>
                        <Skeleton variant="rect" height={40}/>
                    </SkeltonTitleWrapper>
                </SkeltonCardWrapper>
            </SkeltonsWrapper>
                }
            </FoodsWrapper>
        </Fragment>
    )
}