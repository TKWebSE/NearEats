import React, { Fragment, useEffect, useReducer, useContext, useState } from 'react';
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import { ThemeProvider } from '@material-ui/core/styles';
import { SaveButton } from "../component/MaterialUISaveButton";
import foodSelectImage from "../images/food-select.jpg";
import { ButtonTheme } from "../style_constants";
import { FOOD_EDIT_TEXT, REQUEST_STATE } from "../constants";
import { fetchFoodApi, updateFoodApi } from '../apis/foodApis';
import { initializeState, foodEditActionTypes, foodEditReducer } from "../reducer/foodEditReducer";
import { FoodEditCard } from "../component/foodComponent/FoodEditCard";
import { FoodDispatch, FoodState, MessageDispatch, MessageState } from '../context/Context';
import { useHistory } from "react-router-dom";
import { foodShowURL } from "../urls/index";
import { SessionState, SessionDispatch } from "../context/Context";
import { TextFieldInReducer } from "../component/TextFieldInReducer";
import { MultiLineTextFieldInReducer } from "../component/MultiLineTextFieldInReducer";
import MUIAnimatedMultiSelect from "../component/MUIAnimatedMultiSelect";
import { foodsIndexURL } from "../urls/index";
import { messageActionTypes } from "../reducer/messageReducer";
import { handleCreatePost } from "../AppImageFunction";

const DetailWrapper = styled.div`
  margin-left:20%;
  margin-right:20%;
`;

const FoodEditHeader = styled.h1`
  margin-top:5%;
`;

const FoodImageWrapper = styled.label`
position:relative;

&:hover{
    transition: all .3s;
    opacity: 0.5;
    color:black;
    transform: scale(1.05);
}
`;

const FoodImage = styled.img`
    width:100%;
    height:60%;
    margin-bottom:2%;
    &:hover{
        transition: all .3s;
        transform: scale(1.05);
    }
`;

const FoodName = styled.h1`
    text-align:left;
    padding-right:1%;
`;

const FoodPrice = styled.h2`
   text-align:left;
   padding-right:1%;
   `;

const FoodDesicription = styled.div`
    text-align:left;
    padding-right:1%;
`;

const FoodCity = styled.div``;

const SelectWrapper = styled.div`
    margin-top:3%;
    margin-bottom:3%;
    margin-left:1%;
`;

const BtnWrapper = styled.div`
  text-align:right;
`;

const SkeltonImage = styled.div`
  margin-bottom:2%;
`;

const SkeltonTitle = styled.div`
  margin-bottom:2%;
`;

const SkeltonDescription = styled.div``;


export const FoodEdit = ({ match }) => {
  const SessionAuthState = useContext(SessionState);
  const SessionAuthDispatch = useContext(SessionDispatch);
  const messageState = useContext(MessageState);
  const messageDispatch = useContext(MessageDispatch);
  const [state, dispatch] = useReducer(foodEditReducer, initializeState);
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const [city, setCity] = useState(SessionAuthState.currentUser.city);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: foodEditActionTypes.FETCHING });
    fetchFoodApi(match.params.foodId)
      .then((data) => {
        if (data.food.user_id === SessionAuthState.currentUser.id) {
          dispatch({
            type: foodEditActionTypes.FETCH_SUCCESS,
            payload: {
              food: data.food
            }
          })
        } else {
          history.push(foodsIndexURL);
        }
      })
      .catch(e => console.log(e))
  }, []);

  const onChangeFhoto = (e) => {
    const files = e.target.files
    if (files.length > 0) {
      var file = files[0]
      setImage(file)
      setPreview(window.URL.createObjectURL(file))
    } else {
      dispatch({
        type: foodEditActionTypes.SETTINGFOODIMAGE,
        payload: {
          image: null
        }
      })
    }
  }

  const createFormData = (e) => {
    const formData = new FormData();
    try {
      if (state.food.image === null || state.food.image === undefined) {
        throw e;
      }
      formData.append('food[image]', image);
      formData.append('food[name]', state.food.name);
      formData.append('food[price]', state.food.price);
      formData.append('food[description]', state.food.description);
      formData.append('food[city]', state.food.city);
      return formData
    } catch (e) {
      messageDispatch({
        type: messageActionTypes.SET_ERROR_MESSAGE,
        payload: {
          errorMessage: FOOD_EDIT_TEXT.NO_IMAGE_MESSAGE
        },
      })
    }
  }

  function onKeyDownEnter(event) {
    submitHandle()
  }

  const submitHandle = async () => {
    const formData = await createFormData();

    updateFoodApi(state.food, formData, city)
      .then((data) => {
        history.push(foodShowURL(data.food.id))
      })
      .catch(e => console.log(e))
  }

  console.log(state)
  return (
    <Fragment>
      <DetailWrapper>
        <FoodEditHeader>
          {FOOD_EDIT_TEXT.HEADER_TITLE}
        </FoodEditHeader>
        {
          REQUEST_STATE.OK === state.fetchstate ?
            <Fragment>
              <FoodImageWrapper htmlFor={"upload-button"} >
                {
                  preview ?
                    <FoodImage src={
                      preview
                    }
                      alt="dummy" >
                    </FoodImage>
                    :
                    <FoodImage src={
                      foodSelectImage
                    }
                      alt="dummy" >
                    </FoodImage>
                }
              </FoodImageWrapper>
              <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={onChangeFhoto}
              />
              <FoodName>
                <TextFieldInReducer
                  label={FOOD_EDIT_TEXT.FOOD_NAME_LABEL}
                  value={state.food.name}
                  dispatch={dispatch}
                  actionType={foodEditActionTypes.SETTINGFOODNAME}
                  onKeyDown={onKeyDownEnter}
                />
              </FoodName>
              <FoodPrice>
                <TextFieldInReducer
                  label={FOOD_EDIT_TEXT.FOOD_PRICE_LABEL}
                  value={state.food.price}
                  dispatch={dispatch}
                  actionType={foodEditActionTypes.SETTINGFOODPRICE}
                  onKeyDown={onKeyDownEnter}
                />
              </FoodPrice>
              <FoodDesicription>
                <MultiLineTextFieldInReducer
                  label={FOOD_EDIT_TEXT.FOOD_DESCRIPTION_LABEL}
                  value={state.food.description}
                  dispatch={dispatch}
                  actionType={foodEditActionTypes.SETTINGFOODDESCRIPTION}
                  onKeyDown={onKeyDownEnter}
                />
              </FoodDesicription>
              <SelectWrapper>
                <MUIAnimatedMultiSelect
                  placeholederText={FOOD_EDIT_TEXT.LOCATION_PLACEHOLDER_TEXT}
                  setCity={setCity}
                  city={city}
                />
              </SelectWrapper>
              <BtnWrapper>
                <SaveButton
                  onClick={submitHandle}
                  btnLabel={FOOD_EDIT_TEXT.SAVE_BTN_LABEL}
                />
              </BtnWrapper>
            </Fragment>
            :
            <Fragment>
              <SkeltonImage>
                <Skeleton variant="rect" width={450} height={300} />
              </SkeltonImage>
              <SkeltonTitle>
                <Skeleton variant="rect" width={450} height={30} />
              </SkeltonTitle>
              <SkeltonDescription>
                <Skeleton variant="rect" width={450} height={30} />
              </SkeltonDescription>
            </Fragment>
        }
      </DetailWrapper >
    </Fragment >
  )
}
